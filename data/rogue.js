window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.rogue = {
  id: "rogue",
  navLabel: "Rogue",
  navDetail: "Combat",
  kicker: "Rogue · Combat",
  title: "Combat Rogue",
  lede: "Sword combat while leveling: one quest weapon for 25–34, then two checklist targets for the climb.",
  scope: "First slice: one 25–34 quest weapon plus a 50–60 checklist. Not a full 1–60 route.",
  items: [
    {
      id: "outlaw-sabre",
      name: "Outlaw Sabre",
      bracket: "25–34",
      source: "Blackfathom Deeps · Horde quest reward",
      reason: "Slow main hand with +16 attack power. Move it off hand when you find an upgrade.",
      stats: [
        { label: "Type", value: "One-handed sword" },
        { label: "Damage", value: "38–72" },
        { label: "Speed", value: "2.70" },
        { label: "DPS", value: "20.37" },
        { label: "Bonus", value: "+16 attack power" }
      ],
      meta: [
        { label: "Suggested bracket", value: "25–34" },
        { label: "Item requirement", value: "No separate level requirement on the tooltip" },
        { label: "Horde quest 6922", value: "Available at level 21" },
      ],
      acquisition: [
        {
          label: "Before you go",
          text: "Take Amongst the Ruins (level 21) from Je'neu Sancrea at Zoram'gar Outpost, Ashenvale."
        },
        {
          label: "In the dungeon",
          text: "One party member on Amongst the Ruins takes the Fathom Core from the underwater Fathom Stone to summon Baron Aquanis. You don't all need the quest."
        },
        {
          label: "Starts inside",
          text: "Loot the Strange Water Globe if it drops. Accept Baron Aquanis, turn it in to Je'neu, and choose Outlaw Sabre."
        }
      ],
      links: [
        { label: "Outlaw Sabre item", url: "https://www.wowhead.com/forever/item=16886/outlaw-sabre" },
        { label: "Item record", url: "https://wowforever.wclbox.com/api/open/v1/items/16886" },
        { label: "Amongst the Ruins", url: "https://www.wowhead.com/forever/quest=6921/amongst-the-ruins" },
        { label: "Baron Aquanis (Horde)", url: "https://www.wowhead.com/forever/quest=6922/baron-aquanis" },
        { label: "Blackfathom Deeps guide", url: "https://www.wowhead.com/forever/guide/blackfathom-deeps-dungeon-overview-location-rewards" }
      ]
    }
  ],
  road: {
    title: "Road to 60",
    intro: "Keep the weapon slot current. Favor quest weapons already on your dungeon path; skip rare epic shopping.",
    groups: [
      {
        id: "do-first",
        tone: "do",
        label: "Do first",
        hint: "Pick these up when the content is on your path.",
        entries: [
          {
            title: "Thrash Blade (if missing)",
            stats: "66–124 damage · 2.70 speed · 35.19 DPS · extra attack on next swing",
            text: "At 45+, pick up Corruption of Earth and Seed from Selendra near Shadowprey Village before killing Princess Theradras in Maraudon.",
            links: [
              { label: "Thrash Blade", url: "https://www.wowhead.com/forever/item=17705/thrash-blade" },
              { label: "Corruption of Earth and Seed (Horde)", url: "https://www.wowhead.com/forever/quest=7064/corruption-of-earth-and-seed" }
            ]
          }
        ]
      },
      {
        id: "already-there",
        tone: "keep",
        label: "If you're already there",
        hint: "Worth the detour only when you're already running the dungeon.",
        entries: [
          {
            title: "Mirah's Song",
            stats: "50–94 damage · 1.80 speed · 40 DPS · +9 Strength · +9 Agility · +8 health per 5 sec",
            text: "At 55+, find Eva Sarkhoff outside Scholomance in Caer Darrow. Chain: Doctor Theolen Krastinov, the Butcher → Krastinov's Bag of Horrors → Kirtonos the Herald. Choose Mirah's Song.",
            links: [
              { label: "Mirah's Song", url: "https://www.wowhead.com/forever/item=15806/mirahs-song" },
              { label: "Start of the chain", url: "https://www.wowhead.com/forever/quest=5382/doctor-theolen-krastinov-the-butcher" },
              { label: "Kirtonos the Herald", url: "https://www.wowhead.com/forever/quest=5384/kirtonos-the-herald" }
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
            title: "Rare epic shopping",
            text: "Skip rare epic shopping. Quest weapons cover the climb."
          }
        ]
      }
    ]
  }
};
