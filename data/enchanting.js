window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.enchanting = {
  id: "enchanting",
  navLabel: "Enchanting",
  navDetail: "Profession",
  kicker: "Profession · Enchanting",
  title: "Enchanting",
  sectionTitle: "Formulas",
  lede: "A boot-speed formula gated by reputation and a supply-camp currency.",
  scope: "First slice: one formula, with the profession skill, reputation and vendor cost shown separately.",
  items: [
    {
      id: "enchant-boots-speed",
      name: "Formula: Enchant Boots – Speed",
      bracket: "280 skill",
      chips: ["Honored", "180 Favor"],
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
        { label: "Vendor cost", value: "180 Merchant's Favor" }
      ],
      acquisition: [
        {
          label: "Buy",
          text: "Beneris at the Barrens supply camp west of the Crossroads sells the formula at Honored for 180 Merchant's Favor."
        },
        {
          label: "Apply",
          text: "Enchant boots you expect to keep. This gives +8% movement speed; the trainer's Minor Speed is a different, weaker +4%."
        },
        {
          label: "Verdict",
          text: "Great for a keeper pair of boots, but not mandatory while leveling."
        }
      ],
      caution: "This is not the trainer's Minor Speed. The trainer version gives +4%; this formula gives +8%.",
      links: [
        { label: "Formula and vendor", url: "https://www.wowhead.com/forever/item=289560/formula-enchant-boots-speed" }
      ]
    }
  ]
};
