window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.paladin = {
  id: "paladin",
  navLabel: "Paladin",
  navDetail: "Protection",
  kicker: "Paladin · Protection",
  title: "Protection Paladin",
  lede: "Shield and threat upgrades for 39–49, with a short list of what to keep for the rest of the climb.",
  scope: "First slice: one 39–49 gear bracket plus a 50–60 checklist. Retribution is not covered yet.",
  items: [
    {
      id: "aegis-of-the-scarlet-commander",
      name: "Aegis of the Scarlet Commander",
      bracket: "39–49",
      chips: ["Equip 39"],
      source: "Scarlet Monastery · Cathedral",
      reason: "High armor and block for block-heavy pulls.",
      stats: [
        { label: "Type", value: "Shield" },
        { label: "Armor", value: "1,548" },
        { label: "Block", value: "23" },
        { label: "Strength", value: "+7" },
        { label: "Stamina", value: "+8" },
        { label: "Block damage", value: "13–15 Holy" }
      ],
      meta: [
        { label: "Suggested bracket", value: "39–49" },
        { label: "Equip requires", value: "Character level 39" },
        { label: "Drops from", value: "Scarlet Commander Mograine, Cathedral wing" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Scarlet Commander Mograine in the Cathedral wing of Scarlet Monastery. Bring a group; no drop rate is promised here."
        },
        {
          label: "Why it lasts",
          text: "The armor, block value and Strength support threat while you hold packs, especially on block-heavy pulls."
        }
      ],
      links: [
        { label: "Aegis of the Scarlet Commander", url: "https://www.wowhead.com/forever/item=7726/aegis-of-the-scarlet-commander" }
      ]
    },
    {
      id: "inventors-focal-sword",
      name: "Inventor's Focal Sword",
      bracket: "39–49",
      chips: ["Equip 48"],
      source: "Maraudon · Tinkerer Gizlock",
      reason: "Spell damage and crit for threat; keep it when a higher DPS sword drops.",
      stats: [
        { label: "Type", value: "Main-hand sword" },
        { label: "Damage", value: "36–67" },
        { label: "Speed", value: "2.20" },
        { label: "DPS", value: "23.41" },
        { label: "Crit", value: "+1%" },
        { label: "Spell power", value: "Up to +60 spell damage/healing" }
      ],
      meta: [
        { label: "Suggested bracket", value: "39–49" },
        { label: "Equip requires", value: "Character level 48" },
        { label: "Drops from", value: "Tinkerer Gizlock, Maraudon" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Tinkerer Gizlock in Maraudon. Bring a group; no drop rate is promised here."
        },
        {
          label: "Keep it",
          text: "Keep it for threat even when a higher melee DPS weapon drops. The spell damage and crit matter more than sheet melee DPS."
        }
      ],
      links: [
        { label: "Inventor's Focal Sword", url: "https://www.wowhead.com/forever/item=17719/inventors-focal-sword" }
      ]
    }
  ],
  road: {
    title: "Road to 60",
    intro: "Fill the threat weapon first, then add mitigation only where the shield slot is weak. Skip farming a full tank set.",
    groups: [
      {
        id: "do-first",
        tone: "do",
        label: "Do first",
        hint: "The one upgrade worth chasing if you do not have it.",
        entries: [
          {
            title: "Inventor's Focal Sword (if missing)",
            text: "Prioritize it if you do not have it. The spell damage and crit matter more than sheet melee DPS for threat.",
            links: [
              { label: "Inventor's Focal Sword", url: "https://www.wowhead.com/forever/item=17719/inventors-focal-sword" }
            ]
          }
        ]
      },
      {
        id: "already-there",
        tone: "keep",
        label: "If you're already there",
        hint: "Only if you are already doing Blackrock Depths and the shield slot needs mitigation.",
        entries: [
          {
            title: "Stoneshell Guard",
            stats: "1,803 base armor · 31 block · +7 Strength · +9 Stamina · +100 bonus armor",
            text: "From Lord Roccor in Blackrock Depths. Requires level 47.",
            links: [
              { label: "Stoneshell Guard", url: "https://www.wowhead.com/forever/item=11631/stoneshell-guard" }
            ]
          }
        ]
      },
      {
        id: "skip",
        tone: "skip",
        label: "Skip",
        hint: "Not worth the time or gold for this climb.",
        entries: [
          {
            title: "Full tank set before 60",
            text: "Skip farming a full tank set before 60. Use quest and dungeon pieces as they come."
          }
        ]
      }
    ]
  }
};
