window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.rogue = {
  id: "rogue",
  navLabel: "Rogue",
  navDetail: "Combat",
  kicker: "Rogue · Combat",
  title: "Combat Rogue",
  lede: "Sword combat from 20 to 60: cheap quest weapons, a few dungeon drops, and one Maraudon run. Skip epic shopping and repeat farms.",
  scope: "Full Combat Rogue 20–60 gear route. Optional drops are labeled; this is not a best-in-slot list.",
  notesTitle: "Before you start",
  notes: [
    {
      title: "At 20: poisons and prep",
      text: "Run Shenthul's Shattered Salute → Deep Cover → Mission: Possible But Not Probable → Hinott's Assistance in Tarren Mill for poisons. Prep Lockpicking around 75 and Pick Pocket; going at 22 with Vanish is fine.",
      links: [
        { label: "Poisons guide", url: "https://www.warcrafttavern.com/forever/guides/poisons" },
        { label: "Mission: Possible But Not Probable", url: "https://www.wowhead.com/forever/quest=2478/mission-possible-but-not-probable" }
      ]
    },
    {
      title: "Weapon rule",
      text: "Use a slow, hard-hitting main hand for Sinister Strike. Don't ignore offhand DPS; Shank uses it (24). Oils and stones can coexist with poison in Forever.",
      links: [
        { label: "Blizzard: Rogue and Warlock deep dive", url: "https://worldofwarcraft.blizzard.com/en-us/news/24310968/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock" }
      ]
    }
  ],
  brackets: [
    {
      id: "20-29",
      label: "20–29",
      note: "Blackfathom Deeps is the core run. Wailing Caverns is useful for its quest sword and incidental drops, not mandatory."
    },
    {
      id: "30-39",
      label: "30–39",
      note: "Scarlet Monastery if you are clearing the required wings. Gnomeregan is optional."
    },
    {
      id: "40-49",
      label: "40–49",
      note: "At 45+, start one Maraudon run. Thrash Blade, Blackstone Ring and Albino Crocscale Boots are on the Road to 60 cards; don't duplicate the farm."
    }
  ],
  items: [
    {
      id: "outlaw-sabre",
      bracketId: "20-29",
      name: "Outlaw Sabre",
      bracket: "25–29+",
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
        { label: "Suggested bracket", value: "25–29 or later" },
        { label: "Item requirement", value: "No separate level requirement on the tooltip" },
        { label: "Horde quest 6922", value: "Available at level 21" }
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
    },
    {
      id: "wingblade",
      bracketId: "20-29",
      name: "Wingblade",
      bracket: "20–29",
      chips: ["Quest chain"],
      source: "Wailing Caverns · Leaders of the Fang",
      reason: "Strong early main hand with Agility and Stamina; the quest chain is the real gate.",
      stats: [
        { label: "Type", value: "One-handed sword" },
        { label: "Damage", value: "24–45" },
        { label: "Speed", value: "2.20" },
        { label: "DPS", value: "15.68" },
        { label: "Agility", value: "+5" },
        { label: "Stamina", value: "+2" }
      ],
      meta: [
        { label: "Suggested bracket", value: "20–29" },
        { label: "Quest 914", value: "Nara Wildmane, Elder Rise, Thunder Bluff" },
        { label: "Quest entry minimum", value: "Level 10" },
        { label: "Dungeon guide notes", value: "Level 15" },
        { label: "Expected run level", value: "About 20; not an equip gate" },
        { label: "Prerequisite chain", value: "The Forgotten Pools (Tonga, Crossroads) → The Stagnant Oasis → Altered Beings → Hamuul Runetotem → Nara Wildmane" }
      ],
      acquisition: [
        {
          label: "Before you go",
          text: "Start The Forgotten Pools with Tonga at the Crossroads, then follow The Stagnant Oasis → Altered Beings → Hamuul Runetotem → Nara Wildmane."
        },
        {
          label: "In the dungeon",
          text: "Collect 4 fanglord gems in Wailing Caverns."
        },
        {
          label: "Turn in",
          text: "Turn in Leaders of the Fang (914) to Nara Wildmane on Elder Rise in Thunder Bluff."
        }
      ],
      caution: "The quest entry lists minimum level 10 while the dungeon guide notes 15. Treat the run level as about 20; neither is an equip requirement.",
      links: [
        { label: "Wingblade item", url: "https://www.wowhead.com/forever/item=6504" },
        { label: "Leaders of the Fang", url: "https://www.wowhead.com/forever/quest=914" }
      ]
    },
    {
      id: "tail-spike",
      bracketId: "20-29",
      name: "Tail Spike",
      bracket: "20–29",
      chips: ["Dungeon drop", "Off hand"],
      source: "Wailing Caverns · Skum",
      reason: "Fast off-hand dagger if it drops on a Wailing Caverns run; don't farm it.",
      stats: [
        { label: "Type", value: "One-hand dagger" },
        { label: "Damage", value: "17–33" },
        { label: "Speed", value: "1.80" },
        { label: "DPS", value: "13.89" },
        { label: "Strength", value: "+3" },
        { label: "Agility", value: "+3" }
      ],
      meta: [
        { label: "Suggested bracket", value: "20–29" },
        { label: "Equip requires", value: "Character level 16" },
        { label: "Drops from", value: "Skum, Wailing Caverns" },
        { label: "Use", value: "Off hand while leveling" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Skum in Wailing Caverns. No drop rate is promised here."
        }
      ],
      caution: "Use it off hand while leveling. Don't make a dedicated farm for it.",
      links: [
        { label: "Tail Spike item", url: "https://www.wowhead.com/forever/item=6448" }
      ]
    },
    {
      id: "leggings-of-fang",
      bracketId: "20-29",
      name: "Leggings of Fang",
      bracket: "20–29",
      chips: ["Dungeon drop", "Optional"],
      source: "Wailing Caverns · Lord Cobrahn",
      reason: "Efficient Agility legs if Lord Cobrahn is already on the run; not a set chase.",
      stats: [
        { label: "Type", value: "Leather legs" },
        { label: "Armor", value: "78" },
        { label: "Strength", value: "+5" },
        { label: "Agility", value: "+9" },
        { label: "Stamina", value: "+4" }
      ],
      meta: [
        { label: "Suggested bracket", value: "20–29" },
        { label: "Equip requires", value: "Character level 17" },
        { label: "Drops from", value: "Lord Cobrahn, Wailing Caverns" },
        { label: "Use", value: "Optional; same run as the other Wailing Caverns drops" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Lord Cobrahn in Wailing Caverns. Take them if he is already on your route."
        }
      ],
      caution: "Optional. Don't chase the Fang set while leveling.",
      links: [
        { label: "Leggings of Fang item", url: "https://www.wowhead.com/forever/item=10410" }
      ]
    },
    {
      id: "pyrewood-signet-ring",
      bracketId: "20-29",
      name: "Pyrewood Signet Ring",
      bracket: "20–29",
      chips: ["Rogue quest chain"],
      source: "Capital dead drop · C's An Offer",
      reason: "Early ring with Agility, Stamina and a little hit if you are near a capital.",
      stats: [
        { label: "Type", value: "Finger (Rogue)" },
        { label: "Agility", value: "+4" },
        { label: "Stamina", value: "+4" },
        { label: "Hit", value: "+0.4%" }
      ],
      meta: [
        { label: "Suggested bracket", value: "Around 20" },
        { label: "Quest chain", value: "C's An Offer → Horn of Xelthos → payment" },
        { label: "Dead drop", value: "Cabin by the ramp to Shadowfang Keep, north of Pyrewood" },
        { label: "Database minimum", value: "Level 1 is a dummy value; not a real gate" }
      ],
      acquisition: [
        {
          label: "Start",
          text: "Around level 20, visit a capital and take C's An Offer."
        },
        {
          label: "Dead drop",
          text: "Use the dead drop in the cabin by the ramp to Shadowfang Keep, north of Pyrewood."
        },
        {
          label: "Solo step",
          text: "Do Horn of Xelthos solo or out of party (78261)."
        },
        {
          label: "Payment",
          text: "Return, wait for the payment letter, then check the dead drop again (78307)."
        }
      ],
      caution: "The database's minimum level 1 is a placeholder; don't treat it as a real gate.",
      links: [
        { label: "Pyrewood Signet Ring item", url: "https://www.wowhead.com/forever/item=277210" },
        { label: "Horn of Xelthos", url: "https://www.wowhead.com/forever/quest=78261" },
        { label: "Payment step", url: "https://www.wowhead.com/forever/quest=78307" }
      ]
    },
    {
      id: "ruby-adorned-blade",
      bracketId: "30-39",
      name: "Ruby-Adorned Blade",
      bracket: "30–39",
      chips: ["Rogue only", "Quest chain"],
      source: "Capital dead drop · C's Return Customer",
      reason: "Rogue-only sword with Stamina and Agility from the same C questline.",
      stats: [
        { label: "Type", value: "One-hand sword (Rogue only)" },
        { label: "Damage", value: "38–72" },
        { label: "Speed", value: "2.30" },
        { label: "DPS", value: "23.91" },
        { label: "Agility", value: "+3" },
        { label: "Stamina", value: "+8" }
      ],
      meta: [
        { label: "Suggested bracket", value: "30–39" },
        { label: "Quest 78676", value: "C's Return Customer" },
        { label: "Quest minimum", value: "Level 25" },
        { label: "Practical level", value: "Around 30; not an equip requirement" },
        { label: "Prerequisite", value: "Finish and get paid for the Horn of Xelthos step" },
        { label: "Source", value: "Same capital dead drop; Scarlet Monastery solo step" }
      ],
      acquisition: [
        {
          label: "Before you go",
          text: "Finish and get paid for the Horn of Xelthos step first."
        },
        {
          label: "Take the quest",
          text: "Take C's Return Customer (78676) in a capital. The quest lists level 25; around 30 is practical."
        },
        {
          label: "Scarlet Monastery",
          text: "Use the same dead drop, then do Scarlet Monastery solo. Find the Scarlet disguise and steal the Eye."
        },
        {
          label: "Payment",
          text: "Drop it off, wait for the payment letter, then reopen the dead drop (78699)."
        }
      ],
      caution: "The listed minimum is 25; the practical run level is around 30. It is not an equip requirement.",
      links: [
        { label: "Ruby-Adorned Blade item", url: "https://www.wowhead.com/forever/item=277246" },
        { label: "C's Return Customer", url: "https://www.wowhead.com/forever/quest=78676" },
        { label: "Payment step", url: "https://www.wowhead.com/forever/quest=78699" },
        { label: "Rogue weapon quest walkthrough", url: "https://conquestcapped.com/guides/wow-forever/wow-forever-rogue-weapon-quest/" }
      ]
    },
    {
      id: "sword-of-omen",
      bracketId: "30-39",
      name: "Sword of Omen",
      bracket: "30–39",
      chips: ["Dungeon quest", "Main hand"],
      source: "Scarlet Monastery · Into The Scarlet Monastery",
      reason: "Strength, Agility and Stamina on a quest sword; main hand until Vanquisher's, then off hand.",
      stats: [
        { label: "Type", value: "One-hand sword" },
        { label: "Damage", value: "39–74" },
        { label: "Speed", value: "1.90" },
        { label: "DPS", value: "29.74" },
        { label: "Strength", value: "+9" },
        { label: "Agility", value: "+3" },
        { label: "Stamina", value: "+4" }
      ],
      meta: [
        { label: "Suggested bracket", value: "30–39" },
        { label: "Quest 1048", value: "Into The Scarlet Monastery" },
        { label: "Quest available", value: "Level 33" },
        { label: "Questgiver", value: "Varimathras, Undercity" },
        { label: "Required bosses", value: "Loksey (Library), Herod (Armory), Mograine and Whitemane (Cathedral)" }
      ],
      acquisition: [
        {
          label: "Take the quest",
          text: "Take Into The Scarlet Monastery (1048) from Varimathras in the Undercity at level 33."
        },
        {
          label: "Required wings",
          text: "Clear Library for Loksey, Armory for Herod, and Cathedral for Mograine and Whitemane."
        },
        {
          label: "Turn in",
          text: "Turn in for Sword of Omen."
        }
      ],
      caution: "Use item record 6802; 10829 is a different item.",
      links: [
        { label: "Sword of Omen item", url: "https://www.wowhead.com/forever/item=6802" },
        { label: "Into The Scarlet Monastery", url: "https://www.wowhead.com/forever/quest=1048" }
      ]
    },
    {
      id: "triprunner-dungarees",
      bracketId: "30-39",
      name: "Triprunner Dungarees",
      bracket: "30–39",
      chips: ["Optional", "Gnomeregan"],
      source: "Gnomeregan · Rig Wars chain",
      reason: "Strong Agility legs, but only worth it if Gnomeregan is already on your route.",
      stats: [
        { label: "Type", value: "Leather legs" },
        { label: "Armor", value: "101" },
        { label: "Strength", value: "+3" },
        { label: "Agility", value: "+18" },
        { label: "Stamina", value: "+6" }
      ],
      meta: [
        { label: "Suggested bracket", value: "30–39" },
        { label: "Quest chain", value: "Rig Wars (2841) → Chief Engineer Scooty (2842) → Gnomer-gooooone! (2843)" },
        { label: "Quest 2841", value: "Available at level 25 from Nogg, Valley of Honor, Orgrimmar" },
        { label: "Optional", value: "Only with a Gnomeregan run" }
      ],
      acquisition: [
        {
          label: "Start the chain",
          text: "Take Rig Wars (2841) at level 25 from Nogg in the Valley of Honor, Orgrimmar."
        },
        {
          label: "Next steps",
          text: "Then take Chief Engineer Scooty (2842) from Sovik, and Gnomer-gooooone! (2843) from Scooty in Booty Bay for the Goblin Transponder."
        },
        {
          label: "Dungeon",
          text: "Kill Thermaplugg, loot the combination, open the safe for the blueprints, and turn in to Nogg."
        }
      ],
      caution: "Optional. Don't add a Gnomeregan trip just for these legs.",
      links: [
        { label: "Triprunner Dungarees item", url: "https://www.wowhead.com/forever/item=9624" },
        { label: "Rig Wars", url: "https://www.wowhead.com/forever/quest=2841" },
        { label: "Chief Engineer Scooty", url: "https://www.wowhead.com/forever/quest=2842" },
        { label: "Gnomer-gooooone!", url: "https://www.wowhead.com/forever/quest=2843" }
      ]
    },
    {
      id: "dreadfrost-saber",
      bracketId: "30-39",
      name: "Dreadfrost Saber",
      bracket: "30–39",
      chips: ["Optional", "Dungeon drop"],
      source: "Drowned City · Captain Dreadrise",
      reason: "Frost-damage main hand if Drowned City is already on your route; not a destination.",
      stats: [
        { label: "Type", value: "Main-hand sword" },
        { label: "Damage", value: "46–86" },
        { label: "Speed", value: "2.40" },
        { label: "DPS", value: "27.50" },
        { label: "Stamina", value: "+8" },
        { label: "Effect", value: "+1 frost damage per melee attack" }
      ],
      meta: [
        { label: "Suggested bracket", value: "30–39" },
        { label: "Equip requires", value: "Character level 35" },
        { label: "Drops from", value: "Captain Dreadrise, Drowned City" },
        { label: "Optional", value: "Only if you are already going" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Captain Dreadrise in Drowned City. No drop rate is promised here."
        }
      ],
      caution: "Optional. Don't make Drowned City a destination for this sword.",
      links: [
        { label: "Dreadfrost Saber item", url: "https://www.wowhead.com/forever/item=274603" }
      ]
    },
    {
      id: "vanquishers-sword",
      bracketId: "40-49",
      name: "Vanquisher's Sword",
      bracket: "40–49",
      chips: ["Dungeon quest", "RFD"],
      source: "Razorfen Downs · Bring the End",
      reason: "Attack-power sword that pairs with Sword of Omen; move it to off hand after Thrash Blade.",
      stats: [
        { label: "Type", value: "One-hand sword" },
        { label: "Damage", value: "46–86" },
        { label: "Speed", value: "2.20" },
        { label: "DPS", value: "30.00" },
        { label: "Bonus", value: "+22 attack power" }
      ],
      meta: [
        { label: "Suggested bracket", value: "40–49" },
        { label: "Quest 3341", value: "Bring the End" },
        { label: "Quest available", value: "Level 37" },
        { label: "Questgiver", value: "Andrew Brownell, Undercity Magic Quarter" },
        { label: "Take before", value: "Killing Amnennar in Razorfen Downs" },
        { label: "Use", value: "Main hand with Sword of Omen, then off hand after Thrash Blade" }
      ],
      acquisition: [
        {
          label: "Before you go",
          text: "Take Bring the End (3341) from Andrew Brownell in the Undercity Magic Quarter at level 37."
        },
        {
          label: "In the dungeon",
          text: "Take it before killing Amnennar in Razorfen Downs."
        },
        {
          label: "Turn in",
          text: "Turn in for Vanquisher's Sword."
        }
      ],
      caution: "Accept before the final boss; this is a final-boss reward.",
      links: [
        { label: "Vanquisher's Sword item", url: "https://www.wowhead.com/forever/item=10823" },
        { label: "Bring the End", url: "https://www.wowhead.com/forever/quest=3341" }
      ]
    },
    {
      id: "fleshhide-shoulders",
      bracketId: "40-49",
      name: "Fleshhide Shoulders",
      bracket: "40–49",
      chips: ["Dungeon drop", "RFD"],
      source: "Razorfen Downs · Glutton",
      reason: "Stamina-heavy shoulders if Glutton is on the same Razorfen Downs run.",
      stats: [
        { label: "Type", value: "Leather shoulders" },
        { label: "Armor", value: "95" },
        { label: "Strength", value: "+5" },
        { label: "Agility", value: "+6" },
        { label: "Stamina", value: "+15" }
      ],
      meta: [
        { label: "Suggested bracket", value: "40–49" },
        { label: "Equip requires", value: "Character level 37" },
        { label: "Drops from", value: "Glutton, Razorfen Downs" },
        { label: "Use", value: "Same run as Vanquisher's Sword" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Glutton in Razorfen Downs. Take them if he is already on the Vanquisher's run."
        }
      ],
      caution: "Optional incidental drop; don't add a separate Razorfen Downs trip.",
      links: [
        { label: "Fleshhide Shoulders item", url: "https://www.wowhead.com/forever/item=10774" }
      ]
    },
    {
      id: "rune-of-the-guard-captain",
      bracketId: "40-49",
      name: "Rune of the Guard Captain",
      bracket: "46+",
      chips: ["Revantusk", "Group"],
      source: "Revantusk Village · Job Opening",
      reason: "Cheap hit and attack power if you are already running Jintha'Alor with a group.",
      stats: [
        { label: "Type", value: "Trinket" },
        { label: "Hit", value: "+0.7%" },
        { label: "Attack power", value: "+14" },
        { label: "Zone bonus", value: "Item's attack power tripled in Forest/Grassland" }
      ],
      meta: [
        { label: "Suggested bracket", value: "46+" },
        { label: "Quest 7862", value: "Job Opening" },
        { label: "Quest available", value: "Level 46" },
        { label: "Quest source", value: "Call to Arms board, Revantusk Village, Hinterlands" },
        { label: "Turn in", value: "Primal Torntusk" },
        { label: "Requires", value: "A group in Jintha'Alor" }
      ],
      acquisition: [
        {
          label: "Take the quest",
          text: "At 46+, take Job Opening (7862) from the Call to Arms board in Revantusk Village, Hinterlands."
        },
        {
          label: "In Jintha'Alor",
          text: "With a group, kill 20 each of Berserkers, Shadow Hunters, Blood Drinkers and Soul Eaters."
        },
        {
          label: "Turn in",
          text: "Turn in to Primal Torntusk."
        }
      ],
      caution: "Don't grind this alone. Use it only when a group is already going.",
      links: [
        { label: "Rune of the Guard Captain item", url: "https://www.wowhead.com/forever/item=19120" },
        { label: "Job Opening", url: "https://www.wowhead.com/forever/quest=7862" }
      ]
    },
    {
      id: "woven-ivy-necklace",
      bracketId: "40-49",
      name: "Woven Ivy Necklace",
      bracket: "46+",
      chips: ["Optional", "Revantusk"],
      source: "Revantusk Village · quest 7861",
      reason: "Agility and Stamina neck if the same Revantusk turn-in is already on your list.",
      stats: [
        { label: "Type", value: "Neck" },
        { label: "Strength", value: "+6" },
        { label: "Agility", value: "+9" },
        { label: "Stamina", value: "+10" }
      ],
      meta: [
        { label: "Suggested bracket", value: "46+" },
        { label: "Quest 7861", value: "Same Call to Arms board, Revantusk Village" },
        { label: "Quest minimum", value: "Level 46" },
        { label: "Requires", value: "Hexx and 20 Aman'zasi Guards, with a group" },
        { label: "Turn in", value: "Primal Torntusk" }
      ],
      acquisition: [
        {
          label: "Take the quest",
          text: "At 46, take quest 7861 from the same Call to Arms board in Revantusk Village."
        },
        {
          label: "In Jintha'Alor",
          text: "With the group, kill Hexx and 20 Aman'zasi Guards."
        },
        {
          label: "Turn in",
          text: "Turn in to Primal Torntusk."
        }
      ],
      caution: "Optional. Only if it beats your current neck; don't add a separate grind.",
      links: [
        { label: "Woven Ivy Necklace item", url: "https://www.wowhead.com/forever/item=19159" },
        { label: "Revantusk quest 7861", url: "https://www.wowhead.com/forever/quest=7861" }
      ]
    },
    {
      id: "thrash-blade",
      name: "Thrash Blade",
      bracket: "45+",
      chips: ["Road", "Horde quest"],
      source: "Maraudon · Horde quest reward",
      reason: "High-DPS quest sword with an extra attack; the core 50–60 weapon if you don't have it.",
      stats: [
        { label: "Type", value: "One-hand sword" },
        { label: "Damage", value: "66–124" },
        { label: "Speed", value: "2.70" },
        { label: "DPS", value: "35.19" },
        { label: "Effect", value: "Extra attack on next swing" }
      ],
      meta: [
        { label: "Suggested bracket", value: "45+" },
        { label: "Quest 7064", value: "Corruption of Earth and Seed" },
        { label: "Quest available", value: "Level 45" },
        { label: "Questgiver", value: "Selendra near Shadowprey Village" },
        { label: "Take before", value: "Killing Princess Theradras in Maraudon" }
      ],
      acquisition: [
        {
          label: "Before you go",
          text: "At 45+, take Corruption of Earth and Seed (7064) from Selendra near Shadowprey Village."
        },
        {
          label: "In Maraudon",
          text: "Take it before killing Princess Theradras."
        },
        {
          label: "Turn in",
          text: "Finish the quest for Thrash Blade."
        }
      ],
      caution: "If you already have Thrash Blade, skip the quest step.",
      links: [
        { label: "Thrash Blade item", url: "https://www.wowhead.com/forever/item=17705/thrash-blade" },
        { label: "Corruption of Earth and Seed (Horde)", url: "https://www.wowhead.com/forever/quest=7064/corruption-of-earth-and-seed" }
      ]
    },
    {
      id: "blackstone-ring",
      name: "Blackstone Ring",
      bracket: "49+",
      chips: ["Road", "Dungeon drop"],
      source: "Maraudon · Princess Theradras",
      reason: "Hit, Stamina and attack power ring from the same Maraudon run.",
      stats: [
        { label: "Type", value: "Finger" },
        { label: "Stamina", value: "+6" },
        { label: "Hit", value: "+1%" },
        { label: "Attack power", value: "+20" }
      ],
      meta: [
        { label: "Suggested bracket", value: "49+" },
        { label: "Equip requires", value: "Character level 49" },
        { label: "Drops from", value: "Princess Theradras, Maraudon" },
        { label: "Use", value: "Incidental on the Thrash Blade quest run" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Princess Theradras in Maraudon. Take it if it drops on the Thrash Blade run."
        }
      ],
      caution: "Don't farm it separately; it is an incidental upgrade.",
      links: [
        { label: "Blackstone Ring item", url: "https://www.wowhead.com/forever/item=17713" }
      ]
    },
    {
      id: "albino-crocscale-boots",
      name: "Albino Crocscale Boots",
      bracket: "48+",
      chips: ["Road", "Dungeon drop"],
      source: "Maraudon · Rotgrip",
      reason: "Agility boots with Nature resistance from the same Maraudon run.",
      stats: [
        { label: "Type", value: "Leather boots" },
        { label: "Armor", value: "105" },
        { label: "Agility", value: "+20" },
        { label: "Stamina", value: "+5" },
        { label: "Nature resistance", value: "+6" }
      ],
      meta: [
        { label: "Suggested bracket", value: "48+" },
        { label: "Equip requires", value: "Character level 48" },
        { label: "Drops from", value: "Rotgrip, Maraudon" },
        { label: "Use", value: "Incidental on the Thrash Blade quest run" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Rotgrip in Maraudon. Take them if they drop on the same run."
        }
      ],
      caution: "Don't farm them separately; they are incidental.",
      links: [
        { label: "Albino Crocscale Boots item", url: "https://www.wowhead.com/forever/item=17728" }
      ]
    },
    {
      id: "mirahs-song",
      name: "Mirah's Song",
      bracket: "55+",
      chips: ["Road", "Scholomance chain"],
      source: "Scholomance · Eva Sarkhoff chain",
      reason: "Fast off-hand with Strength, Agility and health regen when you are doing Scholomance.",
      stats: [
        { label: "Type", value: "One-hand sword" },
        { label: "Damage", value: "50–94" },
        { label: "Speed", value: "1.80" },
        { label: "DPS", value: "40.00" },
        { label: "Strength", value: "+9" },
        { label: "Agility", value: "+9" },
        { label: "Health per 5 sec", value: "+8" }
      ],
      meta: [
        { label: "Suggested bracket", value: "55+" },
        { label: "Quest chain", value: "5382 → 5383 → 5384" },
        { label: "Quest available", value: "Level 55" },
        { label: "Start", value: "Eva Sarkhoff outside Scholomance, Caer Darrow" },
        { label: "Use", value: "Off hand on the Scholomance trip" }
      ],
      acquisition: [
        {
          label: "Start the chain",
          text: "At 55+, find Eva Sarkhoff outside Scholomance in Caer Darrow."
        },
        {
          label: "Chain",
          text: "Doctor Theolen Krastinov, the Butcher (5382) → Krastinov's Bag of Horrors (5383) → Kirtonos the Herald (5384)."
        },
        {
          label: "Choose",
          text: "Choose Mirah's Song."
        }
      ],
      caution: "Use it off hand; don't replace a stronger main hand just to equip it.",
      links: [
        { label: "Mirah's Song item", url: "https://www.wowhead.com/forever/item=15806/mirahs-song" },
        { label: "Start of the chain", url: "https://www.wowhead.com/forever/quest=5382/doctor-theolen-krastinov-the-butcher" },
        { label: "Krastinov's Bag of Horrors", url: "https://www.wowhead.com/forever/quest=5383" },
        { label: "Kirtonos the Herald", url: "https://www.wowhead.com/forever/quest=5384/kirtonos-the-herald" }
      ]
    },
    {
      id: "defias-enforcers-shoulderpads",
      name: "Defias Enforcer's Shoulderpads",
      bracket: "48+",
      chips: ["Road", "Optional"],
      source: "Alcaz Prison · The Questioner",
      reason: "Optional leather shoulders with Stamina, attack power and crit if you are already in Alcaz Prison.",
      stats: [
        { label: "Type", value: "Leather shoulders" },
        { label: "Armor", value: "115" },
        { label: "Stamina", value: "+13" },
        { label: "Attack power", value: "+28" },
        { label: "Crit", value: "+0.5%" }
      ],
      meta: [
        { label: "Suggested bracket", value: "48" },
        { label: "Quest", value: "The Questioner, available at level 48" },
        { label: "Source", value: "Alcaz Prison" },
        { label: "Optional", value: "Only if you are already running Alcaz Prison" }
      ],
      acquisition: [
        {
          label: "Quest",
          text: "Take The Questioner at 48 in Alcaz Prison."
        },
        {
          label: "Use",
          text: "Take the shoulders only if the run is already happening."
        }
      ],
      caution: "Not a Deadmines drop. The current Wowhead tooltip lists Alcaz Prison and The Questioner.",
      links: [
        { label: "Defias Enforcer's Shoulderpads item", url: "https://www.wowhead.com/forever/item=276741" }
      ]
    },
    {
      id: "fiendish-machete",
      name: "Fiendish Machete",
      bracket: "54+",
      chips: ["Road", "Optional"],
      source: "Dire Maul East · Alzzin the Wildshaper",
      reason: "Off-hand sword with Agility and attack power if Alzzin is already on your route; no farm.",
      stats: [
        { label: "Type", value: "One-hand sword" },
        { label: "Damage", value: "65–121" },
        { label: "Speed", value: "2.40" },
        { label: "DPS", value: "38.75" },
        { label: "Agility", value: "+5" },
        { label: "Attack power", value: "+18" },
        { label: "Bonus", value: "+18 attack power vs. elementals" }
      ],
      meta: [
        { label: "Suggested bracket", value: "54+" },
        { label: "Equip requires", value: "Character level 54" },
        { label: "Drops from", value: "Alzzin the Wildshaper, Dire Maul East" },
        { label: "Use", value: "Off-hand drop alternative; no farm" }
      ],
      acquisition: [
        {
          label: "Boss drop",
          text: "Alzzin the Wildshaper in Dire Maul East. Take it only if he is already on your route."
        }
      ],
      caution: "Optional off-hand alternative. Don't farm it.",
      links: [
        { label: "Fiendish Machete item", url: "https://www.wowhead.com/forever/item=18310" }
      ]
    }
  ],
  road: {
    title: "Road to 60",
    intro: "Finish with quest weapons and dungeon drops already on your path. One Maraudon run covers the Thrash Blade quest and its incidental drops; skip epic purchases, repeat farms and full sets.",
    groups: [
      {
        id: "do-first",
        tone: "do",
        label: "Do first",
        hint: "The weapon and the one dungeon run worth planning.",
        entries: [
          { itemId: "thrash-blade" }
        ]
      },
      {
        id: "already-there",
        tone: "keep",
        label: "If you're already there",
        hint: "Take these only when the dungeon or group is already on your route.",
        entries: [
          { itemId: "mirahs-song" },
          { itemId: "blackstone-ring" },
          { itemId: "albino-crocscale-boots" },
          { itemId: "defias-enforcers-shoulderpads" },
          { itemId: "fiendish-machete" }
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
            text: "Skip auction-house epics and rare purchases. Quest and dungeon weapons cover the climb."
          },
          {
            title: "Repeat farms",
            text: "Don't repeat a dungeon just for a drop. Take incidental upgrades on runs you already need."
          },
          {
            title: "Full sets before 60",
            text: "Don't build a full set while leveling. Replace pieces as you go."
          }
        ]
      }
    ]
  }
};
