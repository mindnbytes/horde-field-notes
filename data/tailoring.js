window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.tailoring = {
  id: "tailoring",
  navLabel: "Tailoring",
  navDetail: "Profession",
  kicker: "Profession · Tailoring",
  title: "Tailoring",
  sectionTitle: "Gold-making · bags",
  lede: "Bags can solve a real inventory problem, but demand and prices vary by realm. Start with one customer order or one craft.",
  scope: "Skill means Tailoring profession skill, not character level. Check your realm and recipe tooltip before spending; buyer interest and sales are never guaranteed.",
  brackets: [
    { id: "wool", label: "90 skill · Test now", note: "Common 10-slot bag: test one craft or customer order, not a pile of stock." },
    { id: "mageweave", label: "Mageweave era · 190+ · Watch later", note: "Reagent bag's 190 skill is verified; Red Mageweave's trainer learning requirement is not listed. Confirm recipe access before investing." }
  ],
  notesTitle: "Gold-making: test now vs watch later",
  notes: [
    { title: "TEST NOW · Red Woolen Bag", text: "A common 10-slot bag may suit leveling characters who need space. Try one craft or take a customer-materials order before buying stock; check current competing listings and whether bags actually move." },
    { title: "WATCH LATER · Mageweave bags", text: "The 14-slot Red Mageweave Bag is a general upgrade; the 12-slot Mageweave Reagent Bag serves a narrower crafting audience. Compare similar listings and ask for a buyer before spending on a pattern or stock." },
    { title: "Price one bag before you craft", text: "Example, not actual rates: 2g sale − 10s fee − 1g 20s in materials − 10s for lost deposits and a share of the pattern cost = 60s before your time. Value self-farmed cloth at what you could sell it for. Count either the bolts or the cloth used to make them, not both.", links: [{ label: "Forever bolt recipes", url: "https://wowforevertalents.com/professions/tailoring/smaller-headings/#reagents" }] }
  ],
  leveling: {
    title: "Leveling Tailoring",
    intro: "Use trainer recipes through 225 and save your bolts for the next craft. Ranges are suggested switch points, not learning requirements. Buy in small batches: yellow and green crafts can take extra attempts.",
    before: [
      { title: "Rank checkpoints", text: "Apprentice cap 75. Journeyman: 50 skill and character level 10, cap 150 (Snang, Orgrimmar). Expert: 125 skill and level 20, cap 225 (Magar, Orgrimmar). Artisan: 200 skill and level 35, cap 300 (Daryl Stack, Tarren Mill). Character level and profession skill are separate gates.", links: [{ label: "Method · Forever ranks/trainers", url: "https://www.method.gg/wow-forever/tailoring-in-wow-forever-1-300-leveling-guide-and-trainers" }] },
      { title: "Trainer-first through 225", text: "The route through 225 intentionally uses trainer recipes. No special pattern shopping is needed for those stages; check the trainer when a recipe is due and stop if it is unavailable." }
    ],
    groups: [
      { id: "tailoring-linen", label: "1–80 · Linen and Wool", steps: [
        ["1–45 Bolt of Linen Cloth", "2 Linen Cloth per bolt"],
        ["45–55 Heavy Linen Gloves", "2 Bolts of Linen Cloth + 1 Coarse Thread"],
        ["55–80 Bolt of Woolen Cloth", "3 Wool Cloth per bolt; train Journeyman before continuing past 75"]
      ], links: [{ label: "Forever bolt inputs", url: "https://wowforevertalents.com/professions/tailoring/smaller-headings/#reagents" }, { label: "Forever Heavy Linen Gloves recipe", url: "https://wowforevertalents.com/professions/tailoring/gloves/#r-3840" }] },
      { id: "tailoring-wool-silk", label: "80–150 · Wool, Silk, Mageweave", steps: [
        ["80–100 Wool crafts", "Woolen Cape → Gray Woolen Shirt → Double-Stitched Woolen Shoulders. Use the next trainer recipe as it opens."],
        ["100–120 Bolt of Silk Cloth", "4 Silk Cloth per bolt; the last few points may take more crafts"],
        ["120–140 Silk crafts", "Azure Silk Hood → Small Silk Pack; save Heavy Leather for the packs"],
        ["140–150 Bolt of Mageweave", "5 Mageweave Cloth per bolt"]
      ], links: [{ label: "Forever bolt inputs", url: "https://wowforevertalents.com/professions/tailoring/smaller-headings/#reagents" }, { label: "Method route and subranges", url: "https://www.method.gg/wow-forever/tailoring-in-wow-forever-1-300-leveling-guide-and-trainers" }] },
      { id: "tailoring-silk-mageweave", label: "150–225 · Silk to Mageweave Bag", steps: [
        ["150–190 Crimson Silk Vest → Crimson Silk Pantaloons", "Both use 4 Bolts of Silk Cloth and 2 Red Dye. Add 2 Fine Thread for the vest or 2 Silken Thread for the pantaloons."],
        ["190–215 Black Mageweave Gloves", "2 Bolts of Mageweave + 2 Heavy Silken Thread"],
        ["215–225 Mageweave Bag", "4 Bolts of Mageweave + 2 Silken Thread. This is the plain trainer bag, not Red Mageweave or the Reagent Bag."]
      ], text: "Train Artisan at Tarren Mill before you hit 225.", links: [{ label: "Forever Tailoring recipe index", url: "https://wowforevertalents.com/professions/tailoring/" }] },
      { id: "tailoring-runecloth", label: "225–300 · Conditional Runecloth route", steps: [
        ["225–240 Runecloth Belt", "Trainer recipe; 3 Bolts of Runecloth + 1 Rune Thread."],
        ["240–250 Runecloth Gloves", "Learn at 230; 4 bolts + 4 Rugged Leather + 1 Rune Thread. Bind on Pickup pattern listed at Qia in Everlook for 1g 60s before discounts; check stock."],
        ["250–280 Runecloth Headband", "Learn at 250; 4 bolts + 2 Ironweb Spider Silk + 1 Rune Thread. Pattern is listed as a drop or chest find, not a trainer recipe."],
        ["280–300 Runecloth Shoulders", "Learn at 260; 7 bolts + 2 Ironweb Spider Silk + 4 Rugged Leather + 1 Rune Thread. Check pattern access first; turns green at 290."]
      ], text: "Method did not test this stretch on beta. If you already have the Shoulders pattern, compare extending Gloves to 260 to skip buying Headband. If you can't get the final pattern at a reasonable price, pause rather than stockpiling Runecloth. Each bolt takes 5 Runecloth.", links: [{ label: "Runecloth Belt recipe", url: "https://wowforevertalents.com/professions/tailoring/belts/#r-18402" }, { label: "Runecloth Gloves recipe", url: "https://wowforevertalents.com/professions/tailoring/gloves/#r-18417" }, { label: "Runecloth Headband recipe", url: "https://wowforevertalents.com/professions/tailoring/hoods/#r-18444" }, { label: "Runecloth Shoulders recipe", url: "https://wowforevertalents.com/professions/tailoring/spaulders/#r-18449" }, { label: "Reported Qia vendor source", url: "https://bindonforever.com/item/14481" }, { label: "Reported Headband pattern sources", url: "https://bindonforever.com/item/14498" }, { label: "Reported Shoulders pattern sources", url: "https://bindonforever.com/item/14504" }] }
    ]
  },
  items: [
    {
      id: "red-woolen-bag",
      name: "Red Woolen Bag",
      bracket: "90 skill · Test now",
      bracketId: "wool",
      chips: ["TEST NOW", "10 slots", "1 bag"],
      source: "Pattern: Wrahk · Crossroads",
      reason: "A basic 10-slot bag for characters who need inventory space; test demand before making stock.",
      stats: [{ label: "Output", value: "1 Red Woolen Bag" }, { label: "Capacity", value: "10 slots" }],
      meta: [{ label: "Profession skill", value: "90 Tailoring" }, { label: "Pattern source", value: "Wrahk, Crossroads; reported price 5s (vendor price/restock not personally verified)" }],
      costs: [{ label: "Per craft", value: "5 Bolts of Woolen Cloth (15 Wool Cloth if making the bolts), 1 Red Dye, 1 Fine Thread" }],
      acquisition: [{ label: "Recipe gate", text: "Learn Pattern: Red Woolen Bag from Wrahk at Crossroads; verify availability and price with the vendor before planning around it." }, { label: "Test", text: "Check current bag listings and ask a likely buyer. Prefer customer-provided materials or one craft, then compare your fee/net against the value of materials even if you farmed them." }, { label: "Skip", text: "Skip bulk stock if cheaper bags dominate or listings sit unsold. Re-listing can add time and applicable deposits/fees; include them in your own break-even check." }],
      caution: "Recipe/output/materials reported by Forever-oriented sources; vendor price was not independently confirmed. Realm sales and any applicable fees/deposits vary—check in game.",
      links: [{ label: "Forever detailed recipe · Bags (6688)", url: "https://wowforevertalents.com/professions/tailoring/bags/#r-6688" }, { label: "Forever item record", url: "https://bindonforever.com/item/5772" }, { label: "Wrahk Horde vendor reference", url: "https://www.wow-professions.com/forever/npc/wrahk" }]
    },
    {
      id: "mageweave-reagent-bag",
      name: "Mageweave Reagent Bag",
      bracket: "190 skill · Watch later",
      bracketId: "mageweave",
      chips: ["WATCH LATER", "12 reagent slots", "1 bag"],
      source: "Pattern: Jim’bek · camp west of Crossroads",
      reason: "A narrower bag for players who specifically need reagent storage; not a general 12-slot bag.",
      stats: [{ label: "Output", value: "1 Mageweave Reagent Bag" }, { label: "Capacity", value: "12 reagent-only slots" }],
      meta: [{ label: "Profession skill", value: "190 Tailoring" }, { label: "Reputation", value: "Friendly" }, { label: "Pattern cost", value: "60 Merchant’s Favor from Jim’bek, camp west of Crossroads" }],
      costs: [{ label: "Per craft", value: "4 Bolts of Mageweave (20 Mageweave Cloth if making the bolts), 2 Heavy Silken Thread, 1 Magenta Dye, 1 Cerulean Dye" }],
      acquisition: [{ label: "Recipe gate", text: "Pattern: Mageweave Reagent Bag is listed at Jim’bek for 60 Merchant’s Favor at Friendly. The pattern is reported as Bind on Pickup; verify its tooltip before buying. Pattern binding is distinct from the finished bag's binding." }, { label: "Test", text: "Watch for an actual buyer who needs reagent-only capacity, check local supply, then quote a single commission. Count the pattern cost across only the crafts you realistically expect." }, { label: "Skip", text: "Skip speculative stock if buyers need ordinary bags instead. A narrow use case can mean slower sales and more relisting." }],
      caution: "The pattern is Bind on Pickup; that does not mean the finished bag is. Verify Horde vendor availability and current tooltip in game.",
      links: [{ label: "Forever detailed recipe · Specialty Bags (1257443)", url: "https://wowforevertalents.com/professions/tailoring/specialty-bags/#r-1257443" }, { label: "Forever pattern record", url: "https://www.wowhead.com/forever/item=254036/pattern-mageweave-reagent-bag" }, { label: "Jim’bek Horde vendor reference", url: "https://www.wow-professions.com/forever/npc/jimbek" }]
    },
    {
      id: "red-mageweave-bag",
      name: "Red Mageweave Bag",
      bracket: "Mageweave era · Watch later",
      bracketId: "mageweave",
      chips: ["WATCH LATER", "14 slots", "1 bag"],
      source: "Tailoring trainer",
      reason: "A general 14-slot bag; compare it against other 14-slot options before paying a premium.",
      stats: [{ label: "Output", value: "1 Red Mageweave Bag" }, { label: "Capacity", value: "14 slots" }],
      meta: [{ label: "Profession skill", value: "Trainer recipe; exact learning requirement not listed" }, { label: "Recipe source", value: "Trainer; check availability" }],
      costs: [{ label: "Per craft", value: "5 Bolts of Mageweave (25 Mageweave Cloth if making the bolts), 2 Red Dye, 2 Heavy Silken Thread" }],
      acquisition: [{ label: "Recipe gate", text: "Learn from a Tailoring trainer; the detailed Forever recipe page does not list an exact learning requirement. Its yellow skill-up point is 210, not a learning gate. Check trainer availability in game." }, { label: "Test", text: "Compare local prices and check for competing 14-slot bags. Quote one commission or craft one only after checking price against material value." }, { label: "Skip", text: "Skip buying a large pile of Mageweave when competitors undercut or listings linger. Count applicable deposits/relisting and the share of recipe acquisition cost you expect to recover." }],
      caution: "Forever detailed recipe and Nov 2026 hotfix references support the materials/output; exact trainer learning requirement is not listed.",
      links: [{ label: "Forever detailed recipe · Bags (12079)", url: "https://wowforevertalents.com/professions/tailoring/bags/#r-12079" }, { label: "Forever item record", url: "https://www.wowhead.com/forever/item=10051/red-mageweave-bag" }, { label: "Blizzard Forever hotfixes (Nov 20, 2026)", url: "https://news.blizzard.com/en-us/article/24315281/wow-forever-hotfixes-november-20-2026" }]
    }
  ]
};
