window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.blacksmithing = {
  id: "blacksmithing",
  navLabel: "Blacksmithing",
  navDetail: "Profession",
  kicker: "Profession · Blacksmithing",
  title: "Blacksmithing",
  sectionTitle: "Plans",
  lede: "A fallback two-hander plan whose quest gate is a character level, not a skill.",
  scope: "First slice: one plan. Profession skill, character level and material cost are labeled separately.",
  items: [
    {
      id: "mithril-warhammer",
      name: "Plans: Mithril Warhammer",
      bracket: "Level 38",
      chips: ["190 skill", "Item 38"],
      source: "Hamur · Bolder'ok, Riverglades",
      reason: "Fallback two-hander if no better drop has landed.",
      stats: [
        { label: "Damage", value: "91–137" },
        { label: "Speed", value: "3.50" },
        { label: "DPS", value: "32.57" },
        { label: "Strength", value: "+9" },
        { label: "Agility", value: "+14" }
      ],
      meta: [
        { label: "Profession skill", value: "190 Blacksmithing" },
        { label: "Character level", value: "Step Two opens at 38" },
        { label: "Finished item", value: "Requires level 38" },
        { label: "Questgiver", value: "Hamur, Bolder'ok, Riverglades" },
        { label: "Chain", value: "Step One: Rock → Step Two: More Rock" }
      ],
      costs: [
        { label: "Turn-in", value: "10 Heavy Weightstones" },
        { label: "Crafting mats", value: "12 Mithril Bars · 2 Citrine · 1 Solid Grinding Stone · 4 Heavy Leather" }
      ],
      acquisition: [
        {
          label: "Get the plan",
          text: "Do Step One: Rock first. Step Two: More Rock from Hamur in Bolder'ok, Riverglades then opens at character level 38; the plan itself needs 190 Blacksmithing."
        },
        {
          label: "Turn in",
          text: "Bring 10 Heavy Weightstones to Hamur for the plan. These are a separate turn-in cost, not crafting materials."
        },
        {
          label: "Craft",
          text: "The finished warhammer also requires character level 38. Crafting uses 12 Mithril Bars, 2 Citrine, 1 Solid Grinding Stone and 4 Heavy Leather."
        },
        {
          label: "Verdict",
          text: "Use it only as a fallback if you have not landed a better two-hander."
        }
      ],
      caution: "190 is the plan's profession skill and 38 is the character level for the quest and item. The 10 Heavy Weightstones are for the turn-in, not the craft.",
      links: [
        { label: "Plans: Mithril Warhammer", url: "https://www.wowhead.com/forever/item=251460/plans-mithril-warhammer" },
        { label: "Step One: Rock (Horde)", url: "https://www.wowhead.com/forever/quest=95183/step-one-rock" },
        { label: "Step Two: More Rock (Horde)", url: "https://www.wowhead.com/forever/quest=96026/step-two-more-rock" }
      ]
    }
  ]
};
