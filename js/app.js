(function () {
  "use strict";

  var DATA = window.HORDE_FIELD_NOTES || {};
  var DEFAULT_GUIDE = "rogue";

  var mainEl = document.getElementById("main");
  var navEl = document.getElementById("guide-nav");
  var previewEl = document.getElementById("stat-preview");

  var currentRoute = null;
  var currentGuide = null;
  var itemsById = new Map();
  var previewVisible = false;
  var previewAnchor = null;
  var previewScrollTimer = null;
  var previewLeaveTimer = null;
  var previewPointerX = null;
  var keyboardModality = false;

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      switch (character) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#39;";
        default:
          return character;
      }
    });
  }

  function guideKeys() {
    return Object.keys(DATA);
  }

  function hasGuide(guideId) {
    return Object.prototype.hasOwnProperty.call(DATA, guideId);
  }

  function findItem(guide, itemId) {
    var items = guide.items || [];

    for (var index = 0; index < items.length; index += 1) {
      if (items[index].id === itemId) {
        return items[index];
      }
    }

    return null;
  }

  function findSpec(guide, specId) {
    var specs = guide.specs || [];

    for (var index = 0; index < specs.length; index += 1) {
      if (specs[index].id === specId) {
        return specs[index];
      }
    }

    return null;
  }

  function defaultSpecId(guide) {
    if (guide.defaultSpec) {
      return guide.defaultSpec;
    }
    if (guide.specs && guide.specs.length) {
      return guide.specs[0].id;
    }
    return null;
  }

  // A spec owns its content and names; shared fields (id, navLabel, specs and
  // routing hints) always come from the guide so routes stay stable.
  var SPEC_OWNED_FIELDS = [
    "kicker", "title", "lede", "scope", "sectionTitle",
    "notes", "notesTitle", "brackets", "items", "road", "readiness", "placeholder"
  ];

  function guideForSpec(guide, specId) {
    if (!guide.specs || !guide.specs.length) {
      return guide;
    }

    var spec = findSpec(guide, specId || defaultSpecId(guide));

    if (!spec) {
      return guide;
    }

    var view = {};

    Object.keys(guide).forEach(function (key) {
      view[key] = guide[key];
    });

    SPEC_OWNED_FIELDS.forEach(function (key) {
      delete view[key];
    });

    Object.keys(spec).forEach(function (key) {
      if (key !== "id" && key !== "label") {
        view[key] = spec[key];
      }
    });

    view.specId = spec.id;
    view.specLabel = spec.label;
    return view;
  }

  function parseSpecRoute(guide, parts) {
    var guideId = guide.id;
    var defaultId = defaultSpecId(guide);
    var first = parts[0] || "";

    function invalid(specId) {
      return {
        guideId: guideId,
        specId: specId || defaultId,
        view: "gear",
        itemId: null,
        invalid: true
      };
    }

    if (!first) {
      return { guideId: guideId, specId: defaultId, view: "gear", itemId: null };
    }

    // Legacy links used the guide root for its original road checklist. Keep
    // #/paladin/road working by pinning it to the guide's legacyRoadSpec.
    if (first === "road") {
      var legacyId = guide.legacyRoadSpec || defaultId;
      var legacySpec = findSpec(guide, legacyId) || findSpec(guide, defaultId);

      if (!legacySpec || !legacySpec.road) {
        return invalid(defaultId);
      }

      var legacyItem = parts[1] || null;

      if (legacyItem && !findItem(legacySpec, legacyItem)) {
        return invalid(legacySpec.id);
      }

      return {
        guideId: guideId,
        specId: legacySpec.id,
        explicitSpec: true,
        view: "road",
        itemId: legacyItem,
        alias: true
      };
    }

    var spec = findSpec(guide, first);

    if (spec) {
      var sub = parts[1] || "";

      if (!sub) {
        return { guideId: guideId, specId: spec.id, explicitSpec: true, view: "gear", itemId: null };
      }

      if (sub === "road" && spec.road) {
        var roadItem = parts[2] || null;

        if (roadItem && !findItem(spec, roadItem)) {
          return invalid(spec.id);
        }

        return {
          guideId: guideId,
          specId: spec.id,
          explicitSpec: true,
          view: "road",
          itemId: roadItem
        };
      }

      if (sub === "readiness" && spec.readiness && !parts[2]) {
        return { guideId: guideId, specId: spec.id, explicitSpec: true, view: "readiness", itemId: null };
      }

      if (!parts[2] && findItem(spec, sub)) {
        var specItem = findItem(spec, sub);

        // Items that live only on the checklist still need a working deep link.
        if (spec.brackets && spec.brackets.length && !specItem.bracketId &&
            roadHasItem(spec.road, specItem.id)) {
          return {
            guideId: guideId,
            specId: spec.id,
            explicitSpec: true,
            view: "road",
            itemId: sub,
            alias: true
          };
        }

        return {
          guideId: guideId,
          specId: spec.id,
          explicitSpec: true,
          view: "gear",
          itemId: sub
        };
      }

      return invalid(spec.id);
    }

    // Older item links pointed straight at the guide root. Find the spec that
    // owns the item so pasted links still open the matching entry.
    if (!parts[1]) {
      for (var index = 0; index < guide.specs.length; index += 1) {
        var ownerSpec = guide.specs[index];
        var ownerItem = findItem(ownerSpec, first);

        if (ownerItem) {
          var ownerRoadOnly = ownerSpec.brackets && ownerSpec.brackets.length &&
            !ownerItem.bracketId && roadHasItem(ownerSpec.road, ownerItem.id);

          return {
            guideId: guideId,
            specId: ownerSpec.id,
            explicitSpec: true,
            view: ownerRoadOnly ? "road" : "gear",
            itemId: first,
            alias: true
          };
        }
      }
    }

    return invalid(defaultId);
  }

  function parseSimpleRoute(guide, parts) {
    var guideId = guide.id;
    var sub = parts[0] || "";

    if (!sub) {
      return { guideId: guideId, specId: null, view: "gear", itemId: null };
    }

    if (sub === "road" && guide.road) {
      var roadItemId = parts[1] || null;

      if (roadItemId && !findItem(guide, roadItemId)) {
        return { guideId: guideId, specId: null, view: "gear", itemId: null, invalid: true };
      }

      return { guideId: guideId, specId: null, view: "road", itemId: roadItemId };
    }

    if (sub === "leveling" && guide.leveling && !parts[1]) {
      return { guideId: guideId, specId: null, view: "leveling", itemId: null };
    }

    var simpleItem = findItem(guide, sub);

    if (simpleItem) {
      if (guide.brackets && guide.brackets.length && !simpleItem.bracketId &&
          roadHasItem(guide.road, simpleItem.id)) {
        return {
          guideId: guideId,
          specId: null,
          view: "road",
          itemId: sub,
          alias: true
        };
      }

      return { guideId: guideId, specId: null, view: "gear", itemId: sub };
    }

    return { guideId: guideId, specId: null, view: "gear", itemId: null, invalid: true };
  }

  function parseRoute() {
    var raw = window.location.hash.replace(/^#\/?/, "").trim();

    if (!raw) {
      return { guideId: DEFAULT_GUIDE, specId: null, view: "gear", itemId: null, blank: true };
    }

    var parts = raw.split("/").filter(Boolean);
    var guideId = parts[0];

    if (!hasGuide(guideId)) {
      return { guideId: DEFAULT_GUIDE, specId: null, view: "gear", itemId: null, invalid: true };
    }

    var guide = DATA[guideId];

    return guide.specs && guide.specs.length
      ? parseSpecRoute(guide, parts.slice(1))
      : parseSimpleRoute(guide, parts.slice(1));
  }

  function guideGearHash(guide, route) {
    var specSegment = "";

    if (guide.specs && guide.specs.length && route.specId) {
      if (route.specId !== defaultSpecId(guide) || route.explicitSpec) {
        specSegment = "/" + route.specId;
      }
    }

    return "#/" + route.guideId + specSegment;
  }

  function guideRoadHash(guide, route) {
    var specSegment = guide.specs && guide.specs.length && route.specId
      ? "/" + route.specId
      : "";

    return "#/" + route.guideId + specSegment + "/road";
  }

  function guideItemHash(guide, route, itemId) {
    var specSegment = guide.specs && guide.specs.length && route.specId
      ? "/" + route.specId
      : "";

    return "#/" + route.guideId + specSegment + "/" + itemId;
  }

  function routeHash(route) {
    var guide = DATA[route.guideId];

    if (route.view === "road") {
      return guideRoadHash(guide, route) + (route.itemId ? "/" + route.itemId : "");
    }
    if (route.view === "readiness") {
      return guideGearHash(guide, route) + "/readiness";
    }
    if (route.itemId) {
      return guideItemHash(guide, route, route.itemId);
    }
    return guideGearHash(guide, route);
  }

  function replaceHash(hash) {
    if (window.location.hash === hash) {
      return;
    }

    try {
      window.history.replaceState(window.history.state, "", hash);
    } catch (error) {
      // Some file:// contexts reject history updates; navigation still works.
    }
  }

  function pushItemHash(hash, guideId) {
    try {
      window.history.pushState({ fieldNotesItemFrom: guideId }, "", hash);
    } catch (error) {
      replaceHash(hash);
    }
  }

  function buildNav() {
    if (!navEl || navEl.childElementCount) {
      return;
    }

    var list = document.createElement("ul");

    guideKeys().forEach(function (key) {
      var guide = DATA[key];
      var item = document.createElement("li");
      var link = document.createElement("a");

      link.href = "#/" + guide.id;
      link.dataset.guide = guide.id;
      link.innerHTML =
        '<span class="nav-label">' + escapeHtml(guide.navLabel || guide.title) + "</span>" +
        '<span class="nav-detail">' + escapeHtml(guide.navDetail || "") + "</span>";

      item.appendChild(link);
      list.appendChild(item);
    });

    navEl.appendChild(list);
  }

  function syncNav(guideId) {
    if (!navEl) {
      return;
    }

    Array.prototype.forEach.call(navEl.querySelectorAll("a[data-guide]"), function (link) {
      if (link.dataset.guide === guideId) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function render(route, options) {
    options = options || {};
    hidePreview();

    currentRoute = route;
    currentGuide = guideForSpec(DATA[route.guideId], route.specId);
    itemsById = new Map();

    (currentGuide.items || []).forEach(function (item) {
      itemsById.set(item.id, item);
    });

    syncNav(route.guideId);

    var isRoad = route.view === "road";
    var isLeveling = route.view === "leveling";
    var isReadiness = route.view === "readiness";
    var viewLabel = isLeveling ? currentGuide.title + " · " + currentGuide.leveling.title :
      (isRoad ? currentGuide.title + " · " + currentGuide.road.title :
      (isReadiness ? currentGuide.title + " · " + currentGuide.readiness.title : currentGuide.title));

    mainEl.innerHTML = isLeveling ? renderLevelingView(currentGuide, route) :
      (isRoad ? renderRoadView(currentGuide, route) :
      (isReadiness ? renderReadinessView(currentGuide, route) : renderGearView(currentGuide, route)));
    document.title = viewLabel + " · Horde Field Notes";

    bindItems();
    bindBracketJump();

    if (options.scrollTop) {
      window.scrollTo(0, 0);
    }

    if (route.itemId) {
      var article = mainEl.querySelector('[data-item-id="' + route.itemId + '"]');
      if (article) {
        setItemOpen(article, true, { updateHash: false });
        article.scrollIntoView({ block: "start", behavior: "auto" });
      }
    }

    if (options.focusHeading) {
      var heading = mainEl.querySelector(".view-title");
      if (heading) {
        heading.focus({ preventScroll: true });
      }
    }
  }

  function headHtml(guide, route, title, lede, scope) {
    return (
      '<div class="guide-head">' +
        '<p class="kicker">' + escapeHtml(guide.kicker) + "</p>" +
        '<h1 class="view-title" tabindex="-1">' + escapeHtml(title) + "</h1>" +
        '<p class="lede">' + escapeHtml(lede) + "</p>" +
        '<p class="scope"><span class="scope-label">Scope</span>' + escapeHtml(scope || guide.scope) + "</p>" +
        (guide.specs && guide.specs.length ? specNavHtml(guide, route) : "") +
        (guide.road || guide.readiness || guide.leveling ? subnavHtml(guide, route) : "") +
      "</div>"
    );
  }

  // Native links, not a tab widget: each spec has its own stable URL and the
  // current one is marked with aria-current.
  function specNavHtml(guide, route) {
    var links = guide.specs.map(function (spec) {
      var isDefault = spec.id === defaultSpecId(guide);
      var href = "#/" + guide.id + (isDefault ? "" : "/" + spec.id);

      return (
        '<a href="' + escapeHtml(href) + '"' +
          (spec.id === route.specId ? ' aria-current="page"' : "") + ">" +
          escapeHtml(spec.label) +
        "</a>"
      );
    }).join("");

    return (
      '<nav class="spec-nav" aria-label="' + escapeHtml(guide.navLabel || guide.title) + ' specialization">' +
        '<span class="spec-nav-label">Spec</span>' +
        links +
      "</nav>"
    );
  }

  function subnavHtml(guide, route) {
    var gearHash = guideGearHash(guide, route);
    var roadHash = guideRoadHash(guide, route);

    return (
      '<nav class="subnav" aria-label="' + escapeHtml(guide.navLabel || guide.title) + ' views">' +
        (guide.leveling ? '<a href="#/' + escapeHtml(guide.id) + '/leveling"' + (route.view === "leveling" ? ' aria-current="page"' : "") + ">Leveling</a>" : "") +
        '<a href="' + escapeHtml(gearHash) + '"' + (route.view === "gear" ? ' aria-current="page"' : "") + ">" +
          (guide.leveling ? "Gold-making" : "Gear") + "</a>" +
        (guide.road ? '<a href="' + escapeHtml(roadHash) + '"' + (route.view === "road" ? ' aria-current="page"' : "") + ">Road to 60</a>" : "") +
        (guide.readiness ? '<a href="' + escapeHtml(gearHash) + '/readiness"' + (route.view === "readiness" ? ' aria-current="page"' : "") + ">Tank readiness</a>" : "") +
      "</nav>"
    );
  }

  function renderGearView(guide, route) {
    return (
      headHtml(guide, route, guide.title, guide.lede) +
      notesHtml(guide) +
      renderGearItems(guide) +
      (guide.road ? roadCallout(guide, route) : "")
    );
  }

  function notesHtml(guide) {
    if (!guide.notes || !guide.notes.length) {
      return "";
    }

    return (
      '<section class="guide-notes" aria-labelledby="notes-heading">' +
        '<h2 class="notes-heading" id="notes-heading">' + escapeHtml(guide.notesTitle || "Before you start") + "</h2>" +
        '<div class="note-list">' +
          guide.notes.map(function (note) {
            return (
              '<div class="guide-note">' +
                '<h3 class="note-title">' + escapeHtml(note.title) + "</h3>" +
                '<p class="note-text">' + escapeHtml(note.text) + "</p>" +
                (note.links && note.links.length
                  ? '<div class="source-links road-links">' + linkList(note.links) + "</div>"
                  : "") +
              "</div>"
            );
          }).join("") +
        "</div>" +
      "</section>"
    );
  }

  function renderGearItems(guide) {
    if (!guide.items || !guide.items.length) {
      return (
        '<section class="content-section" aria-labelledby="gear-heading">' +
          '<div class="section-head">' +
            '<h2 id="gear-heading">' + escapeHtml(guide.sectionTitle || "Gear") + "</h2>" +
          "</div>" +
          (guide.placeholder
            ? '<p class="placeholder-note">' + escapeHtml(guide.placeholder) + "</p>"
            : "") +
        "</section>"
      );
    }

    if (guide.brackets && guide.brackets.length) {
      var bracketSections = renderBracketSections(guide);

      if (bracketSections) {
        return bracketSections;
      }
    }

    return (
      '<section class="content-section" aria-labelledby="gear-heading">' +
        '<div class="section-head">' +
          '<h2 id="gear-heading">' + escapeHtml(guide.sectionTitle || "Gear") + "</h2>" +
          interactionHintHtml() +
        "</div>" +
        '<div class="item-list">' +
          (guide.items || []).map(function (item) { return renderItem(item); }).join("") +
        "</div>" +
      "</section>"
    );
  }

  function interactionHintHtml() {
    return '<p class="interaction-hint">Hover or focus for local stats. Click, tap, or press Enter for acquisition notes.</p>';
  }

  // Optional gear grouping: guide.brackets = [{ id, label, note? }], with each
  // item opting in through bracketId. Guides without brackets keep the flat list.
  function renderBracketSections(guide) {
    var sections = guide.brackets.map(function (bracket) {
      var items = (guide.items || []).filter(function (item) {
        return item.bracketId === bracket.id;
      });

      if (!items.length) {
        return "";
      }

      var bracketId = escapeHtml(bracket.id);

      return (
        '<section class="level-bracket" id="bracket-' + bracketId + '" aria-labelledby="bracket-title-' + bracketId + '">' +
          '<div class="bracket-head">' +
            '<h3 class="bracket-title" id="bracket-title-' + bracketId + '" tabindex="-1">' + escapeHtml(bracket.label) + "</h3>" +
            (bracket.note ? '<p class="bracket-note">' + escapeHtml(bracket.note) + "</p>" : "") +
          "</div>" +
          '<div class="item-list">' +
            items.map(function (item) { return renderItem(item, "h4"); }).join("") +
          "</div>" +
        "</section>"
      );
    }).filter(Boolean);

    if (!sections.length) {
      return "";
    }

    return (
      '<section class="content-section" aria-labelledby="gear-heading">' +
        '<div class="section-head">' +
          '<h2 id="gear-heading">' + escapeHtml(guide.sectionTitle || "Gear") + "</h2>" +
          interactionHintHtml() +
        "</div>" +
        bracketJumpHtml(guide.brackets, guide.items || []) +
        sections.join("") +
      "</section>"
    );
  }

  function bracketJumpHtml(brackets, items) {
    var targets = brackets.filter(function (bracket) {
      return items.some(function (item) {
        return item.bracketId === bracket.id;
      });
    });

    if (targets.length < 2) {
      return "";
    }

    return (
      '<nav class="bracket-jump" aria-label="Jump to a bracket">' +
        '<span class="bracket-jump-label">Jump to</span>' +
        targets.map(function (bracket) {
          var bracketId = escapeHtml(bracket.id);

          return (
            '<button class="chip chip--jump" type="button" data-bracket-jump="' + bracketId + '" aria-controls="bracket-' + bracketId + '">' +
              escapeHtml(bracket.label) +
            "</button>"
          );
        }).join("") +
      "</nav>"
    );
  }

  function renderRoadView(guide, route) {
    return (
      headHtml(guide, route, guide.road.title, guide.road.intro) +
      '<div class="road-groups">' + guide.road.groups.map(renderRoadGroup).join("") + "</div>"
    );
  }

  function renderLevelingView(guide, route) {
    var leveling = guide.leveling;
    return headHtml(guide, route, leveling.title, leveling.intro, "Horde · Profession skill 1–300.") +
      (leveling.before ? '<section class="guide-notes"><h2 class="notes-heading">Before you go</h2><div class="note-list">' +
        leveling.before.map(function (note) { return '<div class="guide-note"><h3 class="note-title">' + escapeHtml(note.title) +
          '</h3><p class="note-text">' + escapeHtml(note.text) + '</p>' +
          (note.links ? '<div class="source-links road-links">' + linkList(note.links) + '</div>' : '') +
          '</div>'; }).join('') + '</div></section>' : '') +
      '<div class="road-groups">' + leveling.groups.map(function (group) {
        return '<section class="road-group" aria-labelledby="leveling-' + escapeHtml(group.id) + '">' +
          '<div class="road-group-head"><h2 id="leveling-' + escapeHtml(group.id) + '">' + escapeHtml(group.label) +
          '</h2></div>' +
          (group.steps ? '<ol class="leveling-steps road-text">' + group.steps.map(function (step) {
            return '<li><strong>' + escapeHtml(step[0]) + '</strong> · ' + escapeHtml(step[1]) + '</li>';
          }).join("") + '</ol>' : '') +
          (group.text ? '<p class="road-text">' + escapeHtml(group.text) + '</p>' : '') +
          (group.links ? '<div class="source-links">' + linkList(group.links) + '</div>' : '') + '</section>';
      }).join('') + '</div>';
  }

  function renderReadinessView(guide, route) {
    var readiness = guide.readiness;
    return headHtml(guide, route, readiness.title, readiness.intro) +
      '<div class="road-groups">' + readiness.groups.map(function (group) {
        return '<section class="road-group" aria-labelledby="readiness-' + escapeHtml(group.id) + '">' +
          '<div class="road-group-head"><h2 id="readiness-' + escapeHtml(group.id) + '">' + escapeHtml(group.label) + '</h2>' +
          '<p class="road-hint">' + escapeHtml(group.priority) + '</p></div>' +
          '<p class="road-text">' + escapeHtml(group.detail) + '</p></section>';
      }).join("") +
      '<section class="road-group" aria-labelledby="readiness-reading"><div class="road-group-head">' +
      '<h2 id="readiness-reading">Read the sheet: an example</h2></div>' +
      '<p class="road-text">' + escapeHtml(readiness.example) + '</p></section>' +
      '<section class="road-group" aria-labelledby="readiness-sources"><div class="road-group-head">' +
      '<h2 id="readiness-sources">Mechanics and sources</h2></div>' +
      '<p class="road-text">' + escapeHtml(readiness.mechanics) + '</p><div class="source-links">' +
      linkList(readiness.links) + '</div></section></div>';
  }

  function renderRoadGroup(group) {
    return (
      '<section class="road-group road-group--' + escapeHtml(group.tone) + '" aria-labelledby="road-' + escapeHtml(group.id) + '">' +
        '<div class="road-group-head">' +
          '<h2 id="road-' + escapeHtml(group.id) + '"><span class="status-mark" aria-hidden="true"></span>' +
            escapeHtml(group.label) +
          "</h2>" +
          (group.hint ? '<p class="road-hint">' + escapeHtml(group.hint) + "</p>" : "") +
        "</div>" +
        '<ul class="road-list">' + group.entries.map(renderRoadEntry).join("") + "</ul>" +
      "</section>"
    );
  }

  function renderRoadEntry(entry) {
    // A road entry can name a gear item: { itemId: "thrash-blade" }. The shared
    // item card supplies the stats, acquisition notes and local preview.
    if (entry.itemId) {
      var item = itemsById.get(entry.itemId);

      if (item) {
        return '<li class="road-entry road-entry--item">' + renderItem(item) + "</li>";
      }
    }

    return (
      '<li class="road-entry">' +
        "<h3>" + escapeHtml(entry.title) + "</h3>" +
        (entry.stats ? '<p class="road-stats">' + escapeHtml(entry.stats) + "</p>" : "") +
        '<p class="road-text">' + escapeHtml(entry.text) + "</p>" +
        (entry.links && entry.links.length
          ? '<div class="source-links road-links">' + linkList(entry.links) + "</div>"
          : "") +
      "</li>"
    );
  }

  function renderItem(item, headingTag) {
    var tag = headingTag || "h3";
    var chips = '<span class="chip chip--bracket">' + escapeHtml(item.bracket) + "</span>";

    (item.chips || []).forEach(function (chip) {
      chips += '<span class="chip">' + escapeHtml(chip) + "</span>";
    });

    return (
      '<article class="item" id="item-' + escapeHtml(item.id) + '" data-item-id="' + escapeHtml(item.id) + '">' +
        "<" + tag + ' class="item-heading">' +
          '<button class="item-toggle" type="button" aria-expanded="false" aria-controls="details-' + escapeHtml(item.id) + '" data-item="' + escapeHtml(item.id) + '">' +
            '<span class="item-top">' +
              '<span class="item-name">' + escapeHtml(item.name) + "</span>" +
              '<span class="item-chips">' + chips + "</span>" +
            "</span>" +
            '<span class="item-line item-line--source"><span class="row-label">Source</span><span>' + escapeHtml(item.source) + "</span></span>" +
            '<span class="item-line item-line--why"><span class="row-label">Why</span><span>' + escapeHtml(item.reason) + "</span></span>" +
            '<span class="item-action"><span class="item-action-label">View details</span><span class="chev" aria-hidden="true"></span></span>' +
          "</button>" +
        "</" + tag + ">" +
        '<div class="item-details" id="details-' + escapeHtml(item.id) + '" hidden>' + renderDetails(item) + "</div>" +
      "</article>"
    );
  }

  function renderDetails(item) {
    var stats = "";

    if (item.stats && item.stats.length) {
      stats =
        '<div class="detail-block">' +
          "<h4>Local stats</h4>" +
          '<dl class="stat-list">' + statList(item.stats) + "</dl>" +
        "</div>";
    }

    var meta = "";

    if (item.meta && item.meta.length) {
      meta =
        '<div class="detail-block">' +
          "<h4>Gates &amp; source</h4>" +
          '<dl class="stat-list">' + statList(item.meta) + "</dl>" +
          costHtml(item) +
        "</div>";
    } else if (item.costs || item.cost) {
      meta = '<div class="detail-block"><h4>Cost</h4>' + costHtml(item) + "</div>";
    }

    var acquisition = "";

    if (item.acquisition && item.acquisition.length) {
      acquisition =
        '<div class="detail-block">' +
          "<h4>How to get it</h4>" +
          '<div class="acq-steps">' +
            item.acquisition.map(function (step) {
              return (
                '<div class="acq-step">' +
                  '<p class="acq-label">' + escapeHtml(step.label) + "</p>" +
                  '<p class="acq-text">' + escapeHtml(step.text) + "</p>" +
                "</div>"
              );
            }).join("") +
          "</div>" +
        "</div>";
    }

    var caution = item.caution
      ? '<p class="caution"><span class="caution-label">Note</span>' + escapeHtml(item.caution) + "</p>"
      : "";

    var sources =
      item.links && item.links.length
        ? '<div class="source-links"><h4>Sources</h4>' + linkList(item.links) + "</div>"
        : "";

    return (
      '<div class="details-inner">' +
        '<div class="detail-columns">' + stats + meta + "</div>" +
        acquisition +
        caution +
        sources +
      "</div>"
    );
  }

  function statList(rows) {
    return rows.map(function (row) {
      return "<dt>" + escapeHtml(row.label) + "</dt><dd>" + escapeHtml(row.value) + "</dd>";
    }).join("");
  }

  function costHtml(item) {
    var costs = item.costs;

    if (!costs && item.cost) {
      costs = [{ label: "Cost", value: item.cost }];
    }

    if (!costs || !costs.length) {
      return "";
    }

    return costs.map(function (cost) {
      return (
        '<div class="cost-row">' +
          '<span class="cost-label">' + escapeHtml(cost.label) + "</span>" +
          "<span>" + escapeHtml(cost.value) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  function linkList(links) {
    return (
      '<ul class="link-list">' +
        links.map(function (link) {
          return (
            "<li>" +
              '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer">' +
                escapeHtml(link.label) +
                '<span class="external-mark" aria-hidden="true">↗</span>' +
                '<span class="sr-only"> (opens in a new tab)</span>' +
              "</a>" +
            "</li>"
          );
        }).join("") +
      "</ul>"
    );
  }

  function roadCallout(guide, route) {
    return (
      '<aside class="road-callout">' +
        "<div>" +
          '<p class="kicker">Checklist</p>' +
          "<h2>Road to 60</h2>" +
          "<p>Do first, if you're already there, and skip.</p>" +
        "</div>" +
        '<a class="button-link" href="' + escapeHtml(guideRoadHash(guide, route)) + '">Open Road to 60 <span aria-hidden="true">→</span></a>' +
      "</aside>"
    );
  }

  function bindItems() {
    Array.prototype.forEach.call(mainEl.querySelectorAll(".item-toggle"), function (button) {
      button.addEventListener("click", function () {
        toggleItem(button.closest(".item"));
      });

      button.addEventListener("pointerenter", function (event) {
        if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") {
          return;
        }
        showPreview(button, event.clientX);
      });

      button.addEventListener("pointerleave", function (event) {
        if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") {
          return;
        }
        if (!previewEl.contains(event.relatedTarget)) {
          deferPointerLeave(button);
        }
      });

      button.addEventListener("focus", function () {
        var article = button.closest(".item");
        if (keyboardModality && article && !article.classList.contains("is-open")) {
          showPreview(button);
        }
      });

      button.addEventListener("blur", function () {
        hidePreview();
      });
    });
  }

  function bindBracketJump() {
    Array.prototype.forEach.call(mainEl.querySelectorAll("[data-bracket-jump]"), function (button) {
      button.addEventListener("click", function () {
        var section = document.getElementById("bracket-" + button.dataset.bracketJump);

        if (!section) {
          return;
        }

        section.scrollIntoView({ block: "start" });

        var heading = section.querySelector(".bracket-title");
        if (heading) {
          heading.focus({ preventScroll: true });
        }
      });
    });
  }

  function toggleItem(article) {
    if (!article) {
      return;
    }

    var willOpen = !article.classList.contains("is-open");

    if (willOpen) {
      closeOpenItems(article);
    }

    hidePreview();
    setItemOpen(article, willOpen, { updateHash: true });
  }

  function closeOpenItems(except) {
    Array.prototype.forEach.call(mainEl.querySelectorAll(".item.is-open"), function (article) {
      if (article !== except) {
        setItemOpen(article, false, { updateHash: false });
      }
    });
  }

  function setItemOpen(article, open, options) {
    options = options || {};

    var button = article.querySelector(".item-toggle");
    var panel = article.querySelector(".item-details");
    var label = article.querySelector(".item-action-label");

    if (!button || !panel) {
      return;
    }

    if (!open && panel.contains(document.activeElement)) {
      button.focus({ preventScroll: true });
    }

    article.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;

    if (label) {
      label.textContent = open ? "Hide details" : "View details";
    }

    if (options.updateHash !== false && currentRoute && currentGuide) {
      var baseHash = currentRoute.view === "road"
        ? guideRoadHash(currentGuide, currentRoute)
        : guideGearHash(currentGuide, currentRoute);

      if (open) {
        var itemHash = guideItemHash(currentGuide, currentRoute, article.dataset.itemId);

        if (currentRoute.itemId) {
          replaceHash(itemHash);
        } else {
          pushItemHash(itemHash, currentRoute.guideId);
        }

        currentRoute.itemId = article.dataset.itemId;
      } else {
        if (window.history.state && window.history.state.fieldNotesItemFrom === currentRoute.guideId) {
          // The guide entry is directly behind the disclosure. Reuse it instead
          // of adding a second identical guide entry for Back to land on.
          window.history.back();
        } else {
          replaceHash(baseHash);
        }
        currentRoute.itemId = null;
      }
    }
  }

  function showPreview(button, pointerX) {
    if (!previewEl || !currentGuide) {
      return;
    }

    var article = button.closest(".item");
    if (!article || article.classList.contains("is-open")) {
      return;
    }

    var item = itemsById.get(article.dataset.itemId);
    if (!item || !item.stats || !item.stats.length) {
      return;
    }

    clearPreviewLeave();
    previewPointerX = pointerX == null ? null : pointerX;
    previewEl.innerHTML =
      '<p class="preview-kicker">' + escapeHtml(item.bracket) + "</p>" +
      '<p class="preview-name">' + escapeHtml(item.name) + "</p>" +
      '<dl class="preview-stats">' + statList(item.stats) + "</dl>" +
      '<p class="preview-hint">Enter or click for where and how</p>';

    previewEl.hidden = false;
    previewVisible = true;
    previewAnchor = button;
    positionPreview(button);
  }

  function positionPreview(anchor) {
    var margin = 12;
    var rect = anchor.getBoundingClientRect();

    previewEl.style.visibility = "hidden";
    previewEl.style.left = "0px";
    previewEl.style.top = "0px";
    previewEl.style.maxHeight = "";

    var width = previewEl.offsetWidth;
    var height = previewEl.offsetHeight;
    var left;
    var top;
    var roomRight = window.innerWidth - rect.right - margin;
    var roomLeft = rect.left - margin;

    // Touch the trigger edge so the pointer can move directly into the preview.
    if (window.innerWidth >= 760 && roomRight >= width) {
      left = rect.right;
      top = rect.top;
    } else if (window.innerWidth >= 760 && roomLeft >= width) {
      left = rect.left - width;
      top = rect.top;
    } else {
      left = previewPointerX == null
        ? rect.left
        : Math.max(rect.left, Math.min(previewPointerX - width / 2, rect.right - width));
      var roomBelow = window.innerHeight - rect.bottom - margin;
      var roomAbove = rect.top - margin;
      var useBelow = roomBelow >= height || roomBelow >= roomAbove;
      height = Math.min(height, Math.max(0, useBelow ? roomBelow : roomAbove));
      previewEl.style.maxHeight = height + "px";
      top = useBelow ? rect.bottom : rect.top - height;
    }

    left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));
    top = Math.max(margin, Math.min(top, window.innerHeight - height - margin));

    previewEl.style.left = left + "px";
    previewEl.style.top = top + "px";
    previewEl.style.visibility = "";
  }

  function hidePreview() {
    if (!previewEl) {
      return;
    }

    previewVisible = false;
    previewAnchor = null;
    clearPreviewLeave();

    if (previewScrollTimer) {
      window.clearTimeout(previewScrollTimer);
      previewScrollTimer = null;
    }

    if (!previewEl.hidden) {
      previewEl.hidden = true;
    }

    if (previewEl.innerHTML) {
      previewEl.innerHTML = "";
    }
  }

  function hidePointerPreview(button) {
    if (button === previewAnchor && !(keyboardModality && document.activeElement === button)) {
      hidePreview();
    }
  }

  function clearPreviewLeave() {
    if (previewLeaveTimer !== null) {
      window.clearTimeout(previewLeaveTimer);
      previewLeaveTimer = null;
    }
  }

  function deferPointerLeave(button) {
    if (button !== previewAnchor) {
      return;
    }
    clearPreviewLeave();
    previewLeaveTimer = window.setTimeout(function () {
      previewLeaveTimer = null;
      hidePointerPreview(button);
    }, 180);
  }

  function handleScroll(event) {
    if (event.target === previewEl) {
      return;
    }
    if (!previewVisible || !previewAnchor) {
      return;
    }

    if (!previewAnchor.isConnected) {
      hidePreview();
      return;
    }

    // Keep the preview attached while a focused row is scrolled into view.
    // Hide only after scrolling settles with the anchor off-screen.
    positionPreview(previewAnchor);

    if (previewScrollTimer) {
      window.clearTimeout(previewScrollTimer);
    }

    previewScrollTimer = window.setTimeout(function () {
      previewScrollTimer = null;

      if (!previewVisible || !previewAnchor) {
        return;
      }

      var rect = previewAnchor.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        hidePreview();
      } else {
        positionPreview(previewAnchor);
      }
    }, 160);
  }

  function roadHasItem(road, itemId) {
    if (!road || !road.groups) {
      return false;
    }

    return road.groups.some(function (group) {
      return (group.entries || []).some(function (entry) {
        return entry.itemId === itemId;
      });
    });
  }

  function handleRoute(options) {
    var route = parseRoute();

    // A road URL may name a gear item that has no card on that checklist.
    // Open its gear entry instead of rendering a road page that ignores it.
    if (route.view === "road" && route.itemId) {
      var roadGuide = guideForSpec(DATA[route.guideId], route.specId);

      if (!roadHasItem(roadGuide.road, route.itemId) && findItem(roadGuide, route.itemId)) {
        route = {
          guideId: route.guideId,
          specId: route.specId,
          explicitSpec: true,
          view: "gear",
          itemId: route.itemId,
          alias: true
        };
      }
    }

    if (route.blank || route.invalid || route.alias) {
      replaceHash(routeHash(route));
    }

    if (currentRoute && route.guideId === currentRoute.guideId &&
        route.specId === currentRoute.specId &&
        route.view === "gear" && currentRoute.view === "gear" && !route.itemId) {
      hidePreview();
      closeOpenItems();
      currentRoute = route;
      return;
    }

    render(route, options);
  }

  function init() {
    if (!mainEl) {
      return;
    }

    buildNav();
    handleRoute({ focusHeading: false, scrollTop: false });

    window.addEventListener("hashchange", function () {
      handleRoute({ focusHeading: true, scrollTop: true });
    });

    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", hidePreview);
    previewEl.addEventListener("pointerenter", clearPreviewLeave);
    previewEl.addEventListener("pointerleave", function (event) {
      if (previewAnchor && !previewAnchor.contains(event.relatedTarget)) {
        deferPointerLeave(previewAnchor);
      }
    });

    document.addEventListener("keydown", function () {
      keyboardModality = true;
    }, true);

    document.addEventListener("pointerdown", function () {
      keyboardModality = false;
    }, true);

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") {
        return;
      }

      if (previewVisible) {
        hidePreview();
        return;
      }

      var active = document.activeElement;
      if (!active || !mainEl.contains(active) || !active.closest) {
        return;
      }

      var article = active.closest(".item.is-open");
      if (article) {
        setItemOpen(article, false, { updateHash: true });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
