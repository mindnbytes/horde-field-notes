window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.enchanting = {
  id: "enchanting",
  navLabel: "Enchanting",
  navDetail: "Profession",
  kicker: "Profession · Enchanting",
  title: "Enchanting",
  sectionTitle: "Gold-making · enchant services",
  lede: "Test customer-mats enchants before buying stock. Demand and prices are realm-specific hypotheses, not promises.",
  scope: "Skill means Enchanting skill, not character level. These picks are in-person services: agree on the fee first and let the customer supply the materials.",
  brackets: [
    { id: "starter", label: "Starter · 1–199", note: "Test now: a cheap, common low-skill service only if local players actually ask for it." },
    { id: "advanced", label: "Advanced · 200+", note: "Watch later: niche/premium recipes may sell slowly; confirm exact mats and demand before learning or stocking." }
  ],
  notesTitle: "Gold-making: test now vs watch later",
  notes: [
    { title: "TEST NOW · customer mats", text: "Offer one Bracer – Minor Stamina commission for a leveling character seeking +3 Stamina. It's an early trainer recipe; check your trainer for learning availability, then ask for a buyer and customer-supplied 2 Strange Dust. Agree the fee before the one in-person craft.", links: [{ label: "Forever detailed recipe · Bracer enchants (7457)", url: "https://wowforevertalents.com/professions/enchanting/bracer-enchants/#r-7457" }] },
    { title: "WATCH LATER · keeper-boot commission", text: "Boots – Speed is a premium niche service: +8% movement speed; buyer is someone keeping the boots. Formula gate: 280 Enchanting, Honored, 180 Merchant’s Favor from Beneris west of Crossroads. Keep it watch-only until a buyer is found; never assume the formula's cost will pay back." }
  ],
  items: [
    {
      id: "enchant-boots-speed",
      name: "Formula: Enchant Boots – Speed",
      bracket: "280 skill · Watch later",
      bracketId: "advanced",
      chips: ["WATCH LATER", "Honored", "180 Favor"],
      source: "Beneris · Barrens supply camp",
      reason: "Permanent +8% movement speed for boots you'll keep.",
      stats: [
        { label: "Slot", value: "Boots" },
        { label: "Effect", value: "+8% movement speed" },
        { label: "Compare", value: "Trainer Minor Speed: +4%" }
      ],
      meta: [
        { label: "Profession skill", value: "280 Enchanting" },
        { label: "Reputation", value: "Honored" },
        { label: "Vendor", value: "Beneris, Barrens supply camp west of the Crossroads" }
      ],
      costs: [
        { label: "Formula", value: "180 Merchant's Favor" },
        { label: "Per application", value: "2 Large Radiant Shards, 8 Dream Dust, 2 Greater Nether Essences, 1 Blue Sapphire" }
      ],
      acquisition: [
        {
          label: "Buy",
          text: "Beneris at the Barrens supply camp west of the Crossroads sells the Bind on Pickup formula at Honored for 180 Merchant's Favor."
        },
        {
          label: "Apply",
          text: "Each customer application consumes 2 Large Radiant Shards, 8 Dream Dust, 2 Greater Nether Essences and 1 Blue Sapphire. Quote those materials separately; the enchant gives +8% movement speed."
        },
        {
          label: "Verdict",
          text: "Great for a keeper pair of boots, but not mandatory while leveling."
        }
      ],
      caution: "Watch for an actual keeper-boot buyer before spending on the formula or stocking costly materials; skip if the buyer won't cover input value and your fee.",
      links: [
        { label: "Forever detailed recipe · Boots enchants (1328948)", url: "https://wowforevertalents.com/professions/enchanting/boots-enchants/#r-1328948" },
        { label: "Forever formula and vendor", url: "https://www.wowhead.com/forever/item=289560/formula-enchant-boots-speed" }
      ]
    },
    {
      id: "bracer-minor-stamina",
      name: "Enchant Bracer – Minor Stamina",
      bracket: "Early trainer recipe · Test now",
      bracketId: "starter",
      chips: ["TEST NOW", "Customer mats"],
      source: "Trainer · recipe index lists trainer source",
      reason: "A trainer stamina commission to test with customer-supplied materials; only offer when a buyer asks.",
      stats: [{ label: "Effect", value: "+3 Stamina on bracers" }, { label: "Materials", value: "2 Strange Dust per craft" }, { label: "Output", value: "Enchant one bracer per commission" }],
      meta: [{ label: "Profession skill", value: "Early trainer recipe; exact learning requirement not listed" }, { label: "Acquisition", value: "Trainer; check your trainer for availability" }],
      acquisition: [{ label: "Test", text: "Ask for a buyer first, confirm their bracer and agree a fee. Have the customer provide 2 Strange Dust; perform one craft in person." }, { label: "Skip", text: "Skip buying dust or pitching it as a fast seller without observed local demand. If no one asks, keep leveling instead." }],
      caution: "Yellow at 100 skill is the recipe's skill-up color, not its learning requirement.",
      links: [{ label: "Forever detailed recipe · Bracer enchants (7457)", url: "https://wowforevertalents.com/professions/enchanting/bracer-enchants/#r-7457" }]
    },
    {
      id: "boots-lesser-agility",
      name: "Enchant Boots – Lesser Agility",
      bracket: "Leveling range 160–180 · Test by request",
      bracketId: "starter",
      chips: ["TEST BY REQUEST", "Customer mats"],
      source: "Trainer · detailed recipe lists trainer source",
      reason: "A modest +4 Agility option for a buyer seeking an intermediate boots enchant.",
      stats: [{ label: "Effect", value: "+4 Agility on boots" }, { label: "Materials", value: "1 Soul Dust per craft" }, { label: "Output", value: "Enchant one pair of boots" }],
      meta: [{ label: "Profession skill", value: "Trainer recipe; exact learning requirement not listed. Leveling guide uses it at 160–180." }, { label: "Acquisition", value: "Trainer; check availability" }],
      acquisition: [{ label: "Test", text: "Treat 160–180 as a sourced leveling range, not a recipe gate. Ask for a buyer, agree the service fee, and have them supply 1 Soul Dust for one in-person craft." }, { label: "Skip", text: "Don't buy Soul Dust in advance or assume demand; skip if no one requests this modest intermediate effect." }],
      links: [{ label: "Forever detailed recipe · Boots enchants (13637)", url: "https://wowforevertalents.com/professions/enchanting/boots-enchants/#r-13637" }, { label: "Method leveling guide and trainers", url: "https://www.method.gg/wow-forever/enchanting-in-wow-forever-1-300-leveling-guide-and-trainers" }]
    }
  ]
};
