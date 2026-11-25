window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.paladin = {
  id: "paladin",
  navLabel: "Paladin",
  navDetail: "Retribution · Protection",
  defaultSpec: "retribution",
  // Old links used #/paladin/road for the only checklist that existed then.
  legacyRoadSpec: "protection",
  specs: [
    {
      id: "retribution",
      label: "Retribution",
      kicker: "Paladin · Retribution",
      title: "Retribution Paladin",
      lede: "Two-handed leveling from 20 to 60: quest weapons, a few dungeon swaps, and one Maraudon run. Take slow, hard-hitting weapons and skip epic shopping.",
      scope: "Full Retribution 20–60 gear route. Optional drops are labeled; this is not a best-in-slot list.",
      notesTitle: "Before you start",
      notes: [
        {
          title: "Two-handers, not armor type",
          text: "Weapon DPS and a slow, hard-hitting two-hander matter more than chasing armor type while leveling. At 40, don't replace better stat mail just to wear plate."
        },
        {
          title: "Reward choices",
          text: "Hammerbone in Wailing Caverns and Wingblade share one Leaders of the Fang reward, so take only one. Wolfsbane is optional and only worth the detour if the Undead class chain is already moving.",
          links: [
            { label: "Paladin weapon quest guide", url: "https://conquestcapped.com/guides/wow-forever/wow-forever-paladin-weapon-quest/" }
          ]
        }
      ],
      brackets: [
        {
          id: "20-29",
          label: "20–29",
          note: "Two-handers first. Hammerbone and Wingblade share the Leaders of the Fang reward; pick one."
        },
        {
          id: "30-39",
          label: "30–39",
          note: "Scarlet Monastery Armory and Cathedral can cover two weapon slots in one sweep."
        },
        {
          id: "40-49",
          label: "40–49",
          note: "At 45+, one Maraudon run can serve both specs: Focal Sword for Protection, Blackstone Ring here."
        }
      ],
      items: [
        {
          id: "wolfsbane",
          bracketId: "20-29",
          name: "Wolfsbane",
          bracket: "20–29",
          chips: ["Paladin only", "Optional chain"],
          source: "Tirisfal Glades · Undead class chain",
          reason: "Optional two-hander with Stamina, Intellect and a Holy damage proc if the class chain is already moving.",
          stats: [
            { label: "Type", value: "Two-hand sword" },
            { label: "Damage", value: "69–105" },
            { label: "Speed", value: "3.40" },
            { label: "DPS", value: "25.59" },
            { label: "Stamina", value: "+9" },
            { label: "Intellect", value: "+10" },
            { label: "Proc", value: "39–59 Holy damage, 3 hits against wolves or worgen" }
          ],
          meta: [
            { label: "Suggested bracket", value: "20–29" },
            { label: "Quest start", value: "Diplomatic Incident (91858), Danitha Morr, Bandarion Keep" },
            { label: "Chain steps", value: "Fenris Isle rescue/escort, then Ott's Masterwork" },
            { label: "Materials", value: "Deadmines, Shadowfang Keep, Purified Kor Gem" },
            { label: "Finish", value: "Old Fire-Eye (95140) near Greymane Wall" },
            { label: "Availability", value: "Level 20; elite 26 target" }
          ],
          acquisition: [
            {
              label: "Start the chain",
              text: "Take Diplomatic Incident (91858) from Danitha Morr at Bandarion Keep in Tirisfal Glades."
            },
            {
              label: "Fenris Isle",
              text: "Do the Fenris Isle rescue and escort."
            },
            {
              label: "Materials",
              text: "Collect the chain's materials from Deadmines, Shadowfang Keep and the Purified Kor Gem."
            },
            {
              label: "Finish",
              text: "Continue through Ott's Masterwork, then Old Fire-Eye (95140) near Greymane Wall. Available at 20; the target is elite 26, so bring a group."
            }
          ],
          caution: "A long detour. Only worth it if the Undead class chain is already progressing; otherwise use Corpsemaker.",
          links: [
            { label: "Wolfsbane item", url: "https://www.wowhead.com/forever/item=267369" },
            { label: "Diplomatic Incident", url: "https://www.wowhead.com/forever/quest=91858" },
            { label: "Old Fire-Eye", url: "https://www.wowhead.com/forever/quest=95140" },
            { label: "Paladin weapon quest guide", url: "https://conquestcapped.com/guides/wow-forever/wow-forever-paladin-weapon-quest/" }
          ]
        },
        {
          id: "hammerbone",
          bracketId: "20-29",
          name: "Hammerbone",
          bracket: "20–29",
          chips: ["Quest chain", "Reward choice"],
          source: "Wailing Caverns · Leaders of the Fang",
          reason: "First accessible guaranteed two-hander, with Strength and Spirit; the quest chain is the real gate.",
          stats: [
            { label: "Type", value: "Two-hand mace" },
            { label: "Damage", value: "55–84" },
            { label: "Speed", value: "3.40" },
            { label: "DPS", value: "20.44" },
            { label: "Strength", value: "+7" },
            { label: "Spirit", value: "+10" }
          ],
          meta: [
            { label: "Suggested bracket", value: "20–29" },
            { label: "Quest 914", value: "Leaders of the Fang" },
            { label: "Quest entry minimum", value: "Level 10" },
            { label: "Dungeon guide notes", value: "Level 15" },
            { label: "Expected run level", value: "About 20; not an equip gate" },
            { label: "Prerequisite chain", value: "The Forgotten Pools → The Stagnant Oasis → Altered Beings → Hamuul Runetotem → Nara Wildmane" },
            { label: "Reward choice", value: "Hammerbone or Wingblade, not both" }
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
              text: "Turn in Leaders of the Fang (914) to Nara Wildmane on Elder Rise in Thunder Bluff and choose Hammerbone."
            }
          ],
          caution: "Taking this blocks Wingblade for this character. It is the guaranteed two-hander choice.",
          links: [
            { label: "Hammerbone item", url: "https://www.wowhead.com/forever/item=270018" },
            { label: "Leaders of the Fang", url: "https://www.wowhead.com/forever/quest=914" }
          ]
        },
        {
          id: "corpsemaker",
          bracketId: "20-29",
          name: "Corpsemaker",
          bracket: "29",
          chips: ["Equip 29", "Dungeon drop"],
          source: "Razorfen Kraul · Overlord Ramtusk",
          reason: "Guaranteed-style early two-hander if you did not take Hammerbone; strong Strength and Stamina for the level.",
          stats: [
            { label: "Type", value: "Two-hand axe" },
            { label: "Damage", value: "88–132" },
            { label: "Speed", value: "3.80" },
            { label: "DPS", value: "28.95" },
            { label: "Strength", value: "+15" },
            { label: "Stamina", value: "+8" }
          ],
          meta: [
            { label: "Suggested bracket", value: "29–39" },
            { label: "Equip requires", value: "Character level 29" },
            { label: "Drops from", value: "Overlord Ramtusk, Razorfen Kraul" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Overlord Ramtusk in Razorfen Kraul. Take it on a run you already need; no drop rate is promised here."
            }
          ],
          caution: "Use item record 6687. Item 6689 is a shield, not this axe.",
          links: [
            { label: "Corpsemaker item", url: "https://www.wowhead.com/forever/item=6687" }
          ]
        },
        {
          id: "abandoned-ferocity",
          bracketId: "30-39",
          name: "Abandoned Ferocity",
          bracket: "30–39",
          chips: ["Equip 35", "Quest chain"],
          source: "Desolace · Gelkis centaur chain",
          reason: "Guaranteed two-hander with a broad Strength, Agility and Stamina package if Desolace is already on your route.",
          stats: [
            { label: "Type", value: "Two-hand axe" },
            { label: "Damage", value: "95–143" },
            { label: "Speed", value: "3.20" },
            { label: "DPS", value: "37.19" },
            { label: "Strength", value: "+10" },
            { label: "Agility", value: "+4" },
            { label: "Stamina", value: "+12" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 35" },
            { label: "Reputation", value: "Honored with the Gelkis" },
            { label: "Quest chain", value: "Gelkis reputation → Valley of Bones → Khan Jehn (93128)" },
            { label: "Reward available", value: "Level 35+" }
          ],
          acquisition: [
            {
              label: "Choose a side",
              text: "Choose the Gelkis in Desolace and reach Honored."
            },
            {
              label: "Chain",
              text: "Follow the Valley of Bones chain, then finish Khan Jehn (93128) at 35+ for the reward."
            }
          ],
          caution: "Guaranteed, but do not force it if you are not questing in Desolace. Harpoon of Command is the Drowned City alternative.",
          links: [
            { label: "Abandoned Ferocity item", url: "https://www.wowhead.com/forever/item=271801" },
            { label: "Khan Jehn", url: "https://www.wowhead.com/forever/quest=93128" }
          ]
        },
        {
          id: "harpoon-of-command",
          bracketId: "30-39",
          name: "Harpoon of Command",
          bracket: "30–39",
          chips: ["Equip 35", "Optional", "Polearm"],
          source: "Drowned City · Var'Taka",
          reason: "Stamina, dodge and hit on a two-hander if you are already doing Drowned City; train polearms first.",
          stats: [
            { label: "Type", value: "Two-hand polearm" },
            { label: "Damage", value: "97–146" },
            { label: "Speed", value: "3.40" },
            { label: "DPS", value: "35.74" },
            { label: "Stamina", value: "+15" },
            { label: "Dodge", value: "+1%" },
            { label: "Hit", value: "+0.5%" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 35" },
            { label: "Drops from", value: "Var'Taka, Drowned City" },
            { label: "Weapon skill", value: "Train polearms from level 20" },
            { label: "Optional", value: "Only on a Drowned City run" }
          ],
          acquisition: [
            {
              label: "Before you go",
              text: "Train polearms from level 20 so the weapon is usable on pickup."
            },
            {
              label: "Boss drop",
              text: "Var'Taka in the Drowned City. Take it if it drops on the same run."
            }
          ],
          caution: "Optional. Do not add a separate Drowned City trip just for this.",
          links: [
            { label: "Harpoon of Command item", url: "https://www.wowhead.com/forever/item=274601" }
          ]
        },
        {
          id: "ravager",
          bracketId: "30-39",
          name: "Ravager",
          bracket: "30–39",
          chips: ["Equip 37", "Optional", "Armory"],
          source: "Scarlet Monastery · Armory · Herod",
          reason: "High-DPS axe with a spin proc; great damage, but the proc locks you out of actions.",
          stats: [
            { label: "Type", value: "Two-hand axe" },
            { label: "Damage", value: "104–157" },
            { label: "Speed", value: "3.50" },
            { label: "DPS", value: "37.29" },
            { label: "Proc", value: "Spin for 300% weapon DPS every 2 sec for 9 sec; cannot act or cast, speed reduced" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 37" },
            { label: "Drops from", value: "Herod, Armory wing, Scarlet Monastery" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Herod in the Armory wing of Scarlet Monastery. Optional on a run you already need."
            }
          ],
          caution: "Not for every controlled pull: the spin takes away control and slows you. Do not farm it separately.",
          links: [
            { label: "Ravager item", url: "https://www.wowhead.com/forever/item=7717" }
          ]
        },
        {
          id: "mograines-might",
          bracketId: "30-39",
          name: "Mograine's Might",
          bracket: "30–39",
          chips: ["Equip 39", "Cathedral"],
          source: "Scarlet Monastery · Cathedral · Mograine",
          reason: "Alternate two-hander if Ravager does not drop, with Strength, Stamina and Intellect.",
          stats: [
            { label: "Type", value: "Two-hand mace" },
            { label: "Damage", value: "105–159" },
            { label: "Speed", value: "3.40" },
            { label: "DPS", value: "38.82" },
            { label: "Strength", value: "+8" },
            { label: "Stamina", value: "+14" },
            { label: "Intellect", value: "+16" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 39" },
            { label: "Drops from", value: "Scarlet Commander Mograine, Cathedral wing" },
            { label: "Same run", value: "Aegis of the Scarlet Commander for Protection" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Scarlet Commander Mograine in the Cathedral wing of Scarlet Monastery."
            },
            {
              label: "Use",
              text: "Take it as the alternate if Ravager does not drop. The same Cathedral run can produce Aegis for a Protection set."
            }
          ],
          links: [
            { label: "Mograine's Might item", url: "https://www.wowhead.com/forever/item=7723" }
          ]
        },
        {
          id: "raging-berserkers-helm",
          bracketId: "30-39",
          name: "Raging Berserker's Helm",
          bracket: "30–39",
          chips: ["Equip 37", "Optional", "Armory"],
          source: "Scarlet Monastery · Armory · Herod",
          reason: "Mail helm with Strength, Stamina and crit on the same Herod run as Ravager.",
          stats: [
            { label: "Type", value: "Mail helm" },
            { label: "Armor", value: "213" },
            { label: "Strength", value: "+13" },
            { label: "Stamina", value: "+8" },
            { label: "Crit", value: "+1%" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 37" },
            { label: "Drops from", value: "Herod, Armory wing, Scarlet Monastery" },
            { label: "Optional", value: "Same Armory run as Ravager" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Herod in the Armory wing. Take it if it drops on the same run."
            }
          ],
          caution: "Optional incidental upgrade; don't add a separate Armory trip.",
          links: [
            { label: "Raging Berserker's Helm item", url: "https://www.wowhead.com/forever/item=7719" }
          ]
        },
        {
          id: "bigger-rock-on-bigger-stick",
          bracketId: "40-49",
          name: "Bigger Rock on Bigger Stick",
          bracket: "40–49",
          chips: ["Quest reward", "Strength"],
          source: "Krol'dok Stronghold · Eye of Mugg",
          reason: "Guaranteed two-hander with Strength and a damage proc while questing in Krol'dok Stronghold.",
          stats: [
            { label: "Type", value: "Two-hand mace" },
            { label: "Damage", value: "112–168" },
            { label: "Speed", value: "3.40" },
            { label: "DPS", value: "41.18" },
            { label: "Strength", value: "+14" },
            { label: "Proc", value: "272 damage every 2 sec for 20 sec" }
          ],
          meta: [
            { label: "Suggested bracket", value: "40–49" },
            { label: "Quest", value: "Eye of Mugg (94968), after Bring Me His Head" },
            { label: "Source", value: "Krol'dok Stronghold" },
            { label: "Reward", value: "Guaranteed quest choice" }
          ],
          acquisition: [
            {
              label: "Before the turn-in",
              text: "Finish Bring Me His Head in Krol'dok Stronghold."
            },
            {
              label: "Quest",
              text: "Take Eye of Mugg (94968) and choose Bigger Rock on Bigger Stick."
            }
          ],
          caution: "Guaranteed, but only if Krol'dok Stronghold is already on your route.",
          links: [
            { label: "Bigger Rock on Bigger Stick item", url: "https://www.wowhead.com/forever/item=279480" },
            { label: "Eye of Mugg", url: "https://www.wowhead.com/forever/quest=94968" }
          ]
        },
        {
          id: "the-rockpounder",
          bracketId: "40-49",
          name: "The Rockpounder",
          bracket: "40–49",
          chips: ["Equip 44", "Optional", "Uldaman"],
          source: "Uldaman · Archaedas",
          reason: "High-DPS two-hander with crit if Uldaman is already on the route; pick one 40s two-hander, not both.",
          stats: [
            { label: "Type", value: "Two-hand mace" },
            { label: "Damage", value: "126–190" },
            { label: "Speed", value: "3.70" },
            { label: "DPS", value: "42.70" },
            { label: "Strength", value: "+5" },
            { label: "Crit", value: "+2%" }
          ],
          meta: [
            { label: "Suggested bracket", value: "40–49" },
            { label: "Equip requires", value: "Character level 44" },
            { label: "Drops from", value: "Archaedas, Uldaman" },
            { label: "Optional", value: "Only when Uldaman is already planned" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Archaedas in Uldaman. Take it on a run you already need."
            }
          ],
          caution: "One of two 40s two-handers, not both. Bigger Rock on Bigger Stick is the quest alternative.",
          links: [
            { label: "The Rockpounder item", url: "https://www.wowhead.com/forever/item=9413" }
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
          id: "blackstone-ring",
          name: "Blackstone Ring",
          bracket: "49+",
          chips: ["Road", "Dungeon drop"],
          source: "Maraudon · Princess Theradras",
          reason: "Hit, Stamina and attack power ring from the same Maraudon run as the Protection weapon.",
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
            { label: "Use", value: "Incidental on the 45+ Maraudon run" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Princess Theradras in Maraudon. Take it if it drops on the same run as the Protection weapon."
            }
          ],
          caution: "Don't farm it separately; it is an incidental upgrade.",
          links: [
            { label: "Blackstone Ring item", url: "https://www.wowhead.com/forever/item=17713" }
          ]
        },
        {
          id: "gatorbite-axe",
          name: "Gatorbite Axe",
          bracket: "48+",
          chips: ["Road", "Maraudon"],
          source: "Maraudon · Rotgrip",
          reason: "High-DPS two-hander from the same Maraudon run; take it if it drops alongside Focal Sword.",
          stats: [
            { label: "Type", value: "Two-hand axe" },
            { label: "Damage", value: "117–176" },
            { label: "Speed", value: "3.20" },
            { label: "DPS", value: "45.78" },
            { label: "Bleed", value: "210 damage over 7 sec" }
          ],
          meta: [
            { label: "Suggested bracket", value: "50–60" },
            { label: "Equip requires", value: "Character level 48" },
            { label: "Drops from", value: "Rotgrip, Maraudon" },
            { label: "Use", value: "Same run as the Focal Sword trip" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Rotgrip in Maraudon. Take it if it drops on the same run."
            }
          ],
          caution: "If it is missing, do not add a separate Rotgrip farm.",
          links: [
            { label: "Gatorbite Axe item", url: "https://www.wowhead.com/forever/item=17730" }
          ]
        },
        {
          id: "flameslash-crescent",
          name: "Flameslash Crescent",
          bracket: "54+",
          chips: ["Road", "Optional", "Blackmaw Hold"],
          source: "Blackmaw Hold · Impaan the Imprisoner",
          reason: "Late two-hander with Strength, Intellect, hit and crit if Blackmaw Hold is already on your route.",
          stats: [
            { label: "Type", value: "Two-hand axe" },
            { label: "Damage", value: "145–219" },
            { label: "Speed", value: "3.60" },
            { label: "DPS", value: "50.56" },
            { label: "Strength", value: "+19" },
            { label: "Intellect", value: "+8" },
            { label: "Hit", value: "+1.5%" },
            { label: "Crit", value: "+1%" }
          ],
          meta: [
            { label: "Suggested bracket", value: "54+" },
            { label: "Equip requires", value: "Character level 54" },
            { label: "Drops from", value: "Impaan the Imprisoner, Blackmaw Hold" },
            { label: "Optional", value: "Only if the dungeon is already planned" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Impaan the Imprisoner in Blackmaw Hold. Take it if the run is already happening."
            }
          ],
          caution: "Optional late upgrade; don't build a separate trip around it.",
          links: [
            { label: "Flameslash Crescent item", url: "https://www.wowhead.com/forever/item=280056" }
          ]
        },
        {
          id: "ice-barbed-spear",
          name: "Ice Barbed Spear",
          bracket: "58+",
          chips: ["Road", "PvP only", "Polearm"],
          source: "Alterac Valley · Hero of the Frostwolf",
          reason: "Strong PvP reward if you are already winning Alterac Valley; skip it on a normal leveling route.",
          stats: [
            { label: "Type", value: "Two-hand polearm" },
            { label: "Damage", value: "155–233" },
            { label: "Speed", value: "3.60" },
            { label: "DPS", value: "53.89" },
            { label: "Strength", value: "+13" },
            { label: "Agility", value: "+21" },
            { label: "Stamina", value: "+20" }
          ],
          meta: [
            { label: "Suggested bracket", value: "58+" },
            { label: "Quest", value: "Hero of the Frostwolf (8272)" },
            { label: "Requires", value: "A Horde Alterac Valley win" },
            { label: "Quest requirement", value: "Wowhead Forever lists level 58 for this variant" },
            { label: "PvP only", value: "Skip on a normal leveling route" }
          ],
          acquisition: [
            {
              label: "Quest",
              text: "Take Hero of the Frostwolf (8272) and win an Alterac Valley match for the Horde."
            },
            {
              label: "Use",
              text: "Train polearms first. Use it only if you are already doing PvP."
            }
          ],
          caution: "This is quest 8272; 7162 is a different variant. Do not queue Alterac Valley just for the weapon.",
          links: [
            { label: "Ice Barbed Spear item", url: "https://www.wowhead.com/forever/item=19106" },
            { label: "Hero of the Frostwolf", url: "https://www.wowhead.com/forever/quest=8272" }
          ]
        }
      ],
      road: {
        title: "Road to 60",
        intro: "Take the Maraudon two-hander if it drops, then look at Blackmaw Hold and Alterac Valley only when they are already on your route. Skip repeat farms and epic shopping.",
        groups: [
          {
            id: "do-first",
            tone: "do",
            label: "Do first",
            hint: "The same Maraudon run that covers the Protection weapon.",
            entries: [
              { itemId: "gatorbite-axe" },
              { itemId: "blackstone-ring" }
            ]
          },
          {
            id: "already-there",
            tone: "keep",
            label: "If you're already there",
            hint: "Take these only when the dungeon or battleground is already planned.",
            entries: [
              { itemId: "flameslash-crescent" }
            ]
          },
          {
            id: "skip",
            tone: "skip",
            label: "Skip",
            hint: "Not worth adding a separate trip for this climb.",
            entries: [
              { itemId: "ice-barbed-spear" },
              {
                title: "Repeat farms and epic shopping",
                text: "Don't repeat a dungeon for one drop, and skip auction-house epics. Quest and dungeon weapons cover the climb."
              }
            ]
          }
        ]
      }
    },
    {
      id: "protection",
      label: "Protection",
      kicker: "Paladin · Protection",
      title: "Protection Paladin",
      lede: "Shield and threat upgrades from 20 to 60, with a separate tank readiness reference.",
      scope: "Full Protection 20–60 route. Readiness targets are guidance, not entry requirements.",
      notesTitle: "Before you start",
      notes: [
        {
          title: "Shield and one-hander",
          text: "Use a shield and one-hander in dungeons; keep a Retribution two-hander for solo. Upgrade weak armor/shield and build Stamina. Intellect helps when mana limits pulls; spell power helps Holy threat."
        }
      ],
      brackets: [
        {
          id: "20-29",
          label: "20–29",
          note: "Pick one Leaders of the Fang reward: Hammerbone for Retribution or Wingblade here. Outlaw Sabre is still the other early sword."
        },
        {
          id: "30-39",
          label: "30–39",
          note: "Aegis and Sword of Omen come from the same Scarlet Monastery sweep if the weapon slot is weak."
        },
        {
          id: "40-49",
          label: "40–49",
          note: "At 45+, one Maraudon run: Focal Sword for Protection and Blackstone Ring for Retribution."
        }
      ],
      items: [
        {
          id: "kreshs-back",
          bracketId: "20-29",
          name: "Kresh's Back",
          bracket: "20–29",
          chips: ["Equip 18", "Optional", "Wailing Caverns"],
          source: "Wailing Caverns · Kresh",
          reason: "Early shield with armor, block and Defense if Wailing Caverns is already on your route.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "528" },
            { label: "Block", value: "10" },
            { label: "Defense", value: "+5" }
          ],
          meta: [
            { label: "Suggested bracket", value: "20–29" },
            { label: "Equip requires", value: "Character level 18" },
            { label: "Drops from", value: "Kresh, Wailing Caverns" },
            { label: "Optional", value: "Early mitigation only" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Kresh in Wailing Caverns. Take it if it drops on a run you already need."
            }
          ],
          caution: "Optional early shield; don't farm it separately.",
          links: [
            { label: "Kresh's Back item", url: "https://www.wowhead.com/forever/item=13245" }
          ]
        },
        {
          id: "wingblade",
          bracketId: "20-29",
          name: "Wingblade",
          bracket: "20–29",
          chips: ["Quest chain", "Reward choice"],
          source: "Wailing Caverns · Leaders of the Fang",
          reason: "Guaranteed early one-hander for a shield build; the quest chain is the real gate.",
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
            { label: "Quest 914", value: "Leaders of the Fang" },
            { label: "Quest entry minimum", value: "Level 10" },
            { label: "Dungeon guide notes", value: "Level 15" },
            { label: "Expected run level", value: "About 20; not an equip gate" },
            { label: "Prerequisite chain", value: "The Forgotten Pools (Tonga, Crossroads) → The Stagnant Oasis → Altered Beings → Hamuul Runetotem → Nara Wildmane" },
            { label: "Reward choice", value: "Hammerbone or Wingblade, not both" }
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
              text: "Turn in Leaders of the Fang (914) to Nara Wildmane on Elder Rise in Thunder Bluff and choose Wingblade."
            }
          ],
          caution: "One reward choice: Hammerbone or Wingblade, not both. Taking Hammerbone for Retribution blocks this sword.",
          links: [
            { label: "Wingblade item", url: "https://www.wowhead.com/forever/item=6504" },
            { label: "Leaders of the Fang", url: "https://www.wowhead.com/forever/quest=914" }
          ]
        },
        {
          id: "commanders-crest",
          bracketId: "20-29",
          name: "Commander's Crest",
          bracket: "20–29",
          chips: ["Equip 21", "Optional", "SFK"],
          source: "Shadowfang Keep · Commander Springvale",
          reason: "Armor, block, Strength and Stamina shield on a Shadowfang Keep run.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "585" },
            { label: "Block", value: "12" },
            { label: "Strength", value: "+5" },
            { label: "Stamina", value: "+3" },
            { label: "Health per 5 sec", value: "+4" }
          ],
          meta: [
            { label: "Suggested bracket", value: "20–29" },
            { label: "Equip requires", value: "Character level 21" },
            { label: "Drops from", value: "Commander Springvale, Shadowfang Keep" },
            { label: "Optional", value: "Only on a Shadowfang Keep run" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Commander Springvale in Shadowfang Keep. Take it if it drops."
            }
          ],
          caution: "Optional; don't add a separate Shadowfang Keep trip.",
          links: [
            { label: "Commander's Crest item", url: "https://www.wowhead.com/forever/item=6320" }
          ]
        },
        {
          id: "arctic-buckler",
          bracketId: "20-29",
          name: "Arctic Buckler",
          bracket: "20–29",
          chips: ["Quest reward", "Blackfathom Deeps"],
          source: "Blackfathom Deeps · Blackfathom Villainy",
          reason: "Guaranteed quest shield with Stamina, Spirit and Frost resistance; pair it with Outlaw Sabre if you still need a sword.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "642" },
            { label: "Block", value: "13" },
            { label: "Stamina", value: "+8" },
            { label: "Spirit", value: "+3" },
            { label: "Frost resistance", value: "+5" }
          ],
          meta: [
            { label: "Suggested bracket", value: "20–29" },
            { label: "Quest 6561", value: "Blackfathom Villainy" },
            { label: "Quest available", value: "Level 18" },
            { label: "Start", value: "Argent Guard Thaelrid, early alcove in Blackfathom Deeps" },
            { label: "Turn in", value: "Head of Kelris to Bashana Runetotem, Thunder Bluff" },
            { label: "Equip requirement", value: "No separate equip gate listed" }
          ],
          acquisition: [
            {
              label: "Start inside",
              text: "Take Blackfathom Villainy (6561) from Argent Guard Thaelrid in the early alcove of Blackfathom Deeps, available at 18."
            },
            {
              label: "In the dungeon",
              text: "Get the Head of Kelris and turn it in to Bashana Runetotem in Thunder Bluff."
            },
            {
              label: "Choose",
              text: "Choose Arctic Buckler. The same quest gives a sword option, Outlaw Sabre, if that is the bigger upgrade."
            }
          ],
          caution: "One quest reward. If you still need a main hand, compare Outlaw Sabre before taking the shield.",
          links: [
            { label: "Arctic Buckler item", url: "https://www.wowhead.com/forever/item=7002" },
            { label: "Blackfathom Villainy", url: "https://www.wowhead.com/forever/quest=6561" },
            { label: "Outlaw Sabre reference", url: "https://www.wowhead.com/forever/item=16886/outlaw-sabre" }
          ]
        },
        {
          id: "heart-of-agamaggan",
          bracketId: "30-39",
          name: "Heart of Agamaggan",
          bracket: "30–39",
          chips: ["Equip 30", "Razorfen Kraul"],
          source: "Razorfen Kraul · Charlga Razorflank",
          reason: "Shield upgrade on the same Razorfen Kraul run as Corpsemaker; take it incidentally.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "757" },
            { label: "Block", value: "17" },
            { label: "Stamina", value: "+7" },
            { label: "Healing", value: "+15" },
            { label: "Spell damage", value: "+5" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 30" },
            { label: "Drops from", value: "Charlga Razorflank, Razorfen Kraul" },
            { label: "Use", value: "Same run as Corpsemaker" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Charlga Razorflank in Razorfen Kraul. Take it if it drops on the same run."
            }
          ],
          caution: "Incidental, not a farm target.",
          links: [
            { label: "Heart of Agamaggan item", url: "https://www.wowhead.com/forever/item=6694" }
          ]
        },
        {
          id: "heart-of-the-primeval",
          bracketId: "30-39",
          name: "Heart of the Primeval",
          bracket: "30–39",
          chips: ["Equip 35", "Optional", "Drowned City"],
          source: "Drowned City · Primeval Elemental",
          reason: "Frost resistance trinket with an on-demand damage and healing boost on a Drowned City run.",
          stats: [
            { label: "Type", value: "Trinket" },
            { label: "Frost resistance", value: "+18" },
            { label: "Use", value: "Up to +19 damage/healing for 30 sec" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 35" },
            { label: "Drops from", value: "Primeval Elemental, Drowned City" },
            { label: "Optional", value: "On-demand threat, not a permanent stat" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Primeval Elemental in the Drowned City. Take it if the run is already happening."
            }
          ],
          caution: "The use effect is temporary; don't count it as permanent spell power.",
          links: [
            { label: "Heart of the Primeval item", url: "https://www.wowhead.com/forever/item=274615" }
          ]
        },
        {
          id: "sacrificial-sword",
          bracketId: "30-39",
          name: "Sacrificial Sword",
          bracket: "30–39",
          chips: ["Quest chain", "Drowned City"],
          source: "Stranglethorn Vale · A Tale Spun Around the Fire",
          reason: "Guaranteed one-hander fallback if you are already doing the Drowned City chain; compare the tooltip with your current weapon.",
          stats: [
            { label: "Type", value: "One-hand sword" },
            { label: "Damage", value: "25–47" },
            { label: "Speed", value: "1.90" },
            { label: "DPS", value: "18.95" },
            { label: "Stamina", value: "+8" },
            { label: "Spirit", value: "+5" },
            { label: "Spell power", value: "+48 damage and healing" }
          ],
          meta: [
            { label: "Suggested bracket", value: "30–39" },
            { label: "Quest 96078", value: "A Tale Spun Around the Fire" },
            { label: "Quest available", value: "Level 30" },
            { label: "Start", value: "Kin'weelay, Stranglethorn Vale" },
            { label: "Chain", value: "Vile Reef → Gurubashi Legends of Old → Locating Lost City → The Drowned City" },
            { label: "Turn in", value: "Master Gadrin, Sen'jin Village" }
          ],
          acquisition: [
            {
              label: "Start",
              text: "Take A Tale Spun Around the Fire (96078) from Kin'weelay in Stranglethorn Vale at 30."
            },
            {
              label: "Chain",
              text: "Follow Vile Reef → Gurubashi Legends of Old → Locating Lost City → The Drowned City."
            },
            {
              label: "Turn in",
              text: "Turn in to Master Gadrin in Sen'jin Village and choose Sacrificial Sword."
            }
          ],
          caution: "A guaranteed fallback, not automatically better than your current weapon. Compare the tooltip.",
          links: [
            { label: "Sacrificial Sword item", url: "https://www.wowhead.com/forever/item=279886" },
            { label: "A Tale Spun Around the Fire", url: "https://www.wowhead.com/forever/quest=96078" }
          ]
        },
        {
          id: "aegis-of-the-scarlet-commander",
          bracketId: "30-39",
          name: "Aegis of the Scarlet Commander",
          bracket: "30–39",
          chips: ["Equip 39", "Cathedral"],
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
            { label: "Suggested bracket", value: "30–39" },
            { label: "Equip requires", value: "Character level 39" },
            { label: "Drops from", value: "Scarlet Commander Mograine, Cathedral wing" },
            { label: "Same run", value: "Sword of Omen from Into The Scarlet Monastery (1048)" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Scarlet Commander Mograine in the Cathedral wing of Scarlet Monastery. Bring a group; no drop rate is promised here."
            },
            {
              label: "Why it lasts",
              text: "The armor, block value and Strength support threat while you hold packs, especially on block-heavy pulls."
            },
            {
              label: "Weapon fallback",
              text: "If the weapon slot is still weak, Varimathras in the Undercity offers Into The Scarlet Monastery (1048). Clearing Library, Armory and Cathedral earns Sword of Omen on the same sweep."
            }
          ],
          links: [
            { label: "Aegis of the Scarlet Commander", url: "https://www.wowhead.com/forever/item=7726" },
            { label: "Into The Scarlet Monastery", url: "https://www.wowhead.com/forever/quest=1048" }
          ]
        },
        {
          id: "putridus-wall",
          bracketId: "40-49",
          name: "Putridus Wall",
          bracket: "40–49",
          chips: ["Equip 45", "Optional", "Maraudon"],
          source: "Maraudon · Lord Vyletongue",
          reason: "Stamina, Nature resistance and Defense shield on the same Maraudon run as the Focal Sword.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "1,739" },
            { label: "Block", value: "29" },
            { label: "Stamina", value: "+10" },
            { label: "Nature resistance", value: "+8" },
            { label: "Defense", value: "+5" }
          ],
          meta: [
            { label: "Suggested bracket", value: "40–49" },
            { label: "Equip requires", value: "Character level 45" },
            { label: "Drops from", value: "Lord Vyletongue, Maraudon" },
            { label: "Use", value: "Same 45+ Maraudon run as Focal Sword" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Lord Vyletongue in Maraudon. Take it if it drops on the same run."
            }
          ],
          caution: "Optional incidental shield; don't farm it separately.",
          links: [
            { label: "Putridus Wall item", url: "https://www.wowhead.com/forever/item=275864" }
          ]
        },
        {
          id: "inventors-focal-sword",
          bracketId: "40-49",
          name: "Inventor's Focal Sword",
          bracket: "40–49",
          chips: ["Equip 48", "Maraudon", "Threat"],
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
            { label: "Suggested bracket", value: "40–49" },
            { label: "Equip requires", value: "Character level 48" },
            { label: "Drops from", value: "Tinkerer Gizlock, Maraudon" },
            { label: "Plan the run", value: "45+; 48 is the equip gate, not the trip level" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Tinkerer Gizlock in Maraudon. Bring a group; no drop rate is promised here."
            },
            {
              label: "Keep it",
              text: "Keep it for threat even when a higher melee DPS weapon drops. The spell damage and crit matter more than sheet melee DPS."
            },
            {
              label: "Same run",
              text: "A 45+ Maraudon trip can cover Focal Sword for Protection and Blackstone Ring for Retribution. Focal is the Protection priority."
            }
          ],
          caution: "Core priority if you are tanking; the low melee DPS is not the point.",
          links: [
            { label: "Inventor's Focal Sword", url: "https://www.wowhead.com/forever/item=17719/inventors-focal-sword" }
          ]
        },
        {
          id: "noxxions-shackles",
          bracketId: "40-49",
          name: "Noxxion's Shackles",
          bracket: "40–49",
          chips: ["Equip 46", "Maraudon", "Nature resist"],
          source: "Maraudon · Noxxion",
          reason: "Plate wrists with Stamina and Nature resistance on the same Maraudon run.",
          stats: [
            { label: "Type", value: "Plate wrists" },
            { label: "Armor", value: "235" },
            { label: "Strength", value: "+5" },
            { label: "Stamina", value: "+9" },
            { label: "Nature resistance", value: "+10" }
          ],
          meta: [
            { label: "Suggested bracket", value: "40–49" },
            { label: "Equip requires", value: "Character level 46" },
            { label: "Drops from", value: "Noxxion, Maraudon" },
            { label: "Use", value: "Incidental on the same Maraudon run" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Noxxion in Maraudon. Take it if it drops on the same run."
            }
          ],
          caution: "Optional incidental upgrade; don't add a separate run.",
          links: [
            { label: "Noxxion's Shackles item", url: "https://www.wowhead.com/forever/item=17746" }
          ]
        },
        {
          id: "stoneshell-guard",
          name: "Stoneshell Guard",
          bracket: "47+",
          chips: ["Road", "Blackrock Depths"],
          source: "Blackrock Depths · Lord Roccor",
          reason: "Mitigation shield if Blackrock Depths is already on your route and the shield slot needs armor.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "1,803" },
            { label: "Block", value: "31" },
            { label: "Strength", value: "+7" },
            { label: "Stamina", value: "+9" },
            { label: "Bonus armor", value: "+100" }
          ],
          meta: [
            { label: "Suggested bracket", value: "47+" },
            { label: "Equip requires", value: "Character level 47" },
            { label: "Drops from", value: "Lord Roccor, Blackrock Depths" },
            { label: "Optional", value: "Only if Blackrock Depths is already planned" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Lord Roccor in Blackrock Depths. Take it if the run is already happening."
            }
          ],
          caution: "Optional mitigation; don't build a separate Blackrock Depths trip around it.",
          links: [
            { label: "Stoneshell Guard item", url: "https://www.wowhead.com/forever/item=11631" }
          ]
        },
        {
          id: "arbiters-blade",
          name: "Arbiter's Blade",
          bracket: "48+",
          chips: ["Road", "Blackrock Depths", "Threat"],
          source: "Blackrock Depths · Warder Stilgiss",
          reason: "Stamina, hit and spell power one-hander that preserves Focal Sword threat if it drops.",
          stats: [
            { label: "Type", value: "Main-hand sword" },
            { label: "Damage", value: "39–73" },
            { label: "Speed", value: "2.40" },
            { label: "DPS", value: "23.33" },
            { label: "Stamina", value: "+8" },
            { label: "Intellect", value: "+5" },
            { label: "Hit", value: "+0.7%" },
            { label: "Spell power", value: "+60" }
          ],
          meta: [
            { label: "Suggested bracket", value: "48+" },
            { label: "Equip requires", value: "Character level 48" },
            { label: "Drops from", value: "Warder Stilgiss, Blackrock Depths" },
            { label: "Optional", value: "Only on a Blackrock Depths run" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Warder Stilgiss in Blackrock Depths. Take it if the run is already happening."
            }
          ],
          caution: "Low melee DPS does not mean low threat. Compare the spell power, hit and Stamina with Focal Sword.",
          links: [
            { label: "Arbiter's Blade item", url: "https://www.wowhead.com/forever/item=11784" }
          ]
        },
        {
          id: "bloodfur-bulwark",
          name: "Bloodfur Bulwark",
          bracket: "55+",
          chips: ["Road", "Optional", "Blackmaw Hold"],
          source: "Blackmaw Hold · Withermaw",
          reason: "Late shield with Stamina, block value and block chance if Blackmaw Hold is already planned.",
          stats: [
            { label: "Type", value: "Shield" },
            { label: "Armor", value: "2,057" },
            { label: "Block", value: "38" },
            { label: "Stamina", value: "+10" },
            { label: "Block value", value: "+15" },
            { label: "Block chance", value: "+2%" }
          ],
          meta: [
            { label: "Suggested bracket", value: "55+" },
            { label: "Equip requires", value: "Character level 55" },
            { label: "Drops from", value: "Withermaw, Blackmaw Hold" },
            { label: "Optional", value: "Late shield; only with the run" }
          ],
          acquisition: [
            {
              label: "Boss drop",
              text: "Withermaw in Blackmaw Hold. Take it if the run is already happening."
            }
          ],
          caution: "Optional late shield; don't add a separate trip.",
          links: [
            { label: "Bloodfur Bulwark item", url: "https://www.wowhead.com/forever/item=280063" }
          ]
        },
        {
          id: "guardian-talisman",
          name: "Guardian Talisman",
          bracket: "38+",
          chips: ["Road", "Optional", "Utility"],
          source: "Stonard · Fel'zerul chain",
          reason: "Stamina trinket with a stealth-detection reduction for skipping packs with a group; not a defensive cap.",
          stats: [
            { label: "Type", value: "Trinket" },
            { label: "Stamina", value: "+9" },
            { label: "Use", value: "-10 yd detection for 15 sec; 15 min cooldown" }
          ],
          meta: [
            { label: "Suggested bracket", value: "38+" },
            { label: "Equip requires", value: "Character level 38" },
            { label: "Quest", value: "Horde quest 1445 from Fel'zerul in Stonard" },
            { label: "Chain", value: "Pool of Tears → Atal'ai Exile → Return to Fel'Zerul → 20 Fetishes (ST)" },
            { label: "Use", value: "Skipping packs with a group, not a defensive threshold" }
          ],
          acquisition: [
            {
              label: "Start",
              text: "Take the chain from Fel'zerul in Stonard after Pool of Tears → Atal'ai Exile → Return to Fel'Zerul."
            },
            {
              label: "Finish",
              text: "Complete the 20 Fetishes step and turn in for Guardian Talisman."
            }
          ],
          caution: "Utility only. Don't treat it as permanent mitigation or a tank-readiness shortcut.",
          links: [
            { label: "Guardian Talisman item", url: "https://www.wowhead.com/forever/item=1490" },
            { label: "Horde quest 1445", url: "https://www.wowhead.com/forever/quest=1445" }
          ]
        }
      ],
      road: {
        title: "Road to 60",
        intro: "Add mitigation only where the shield slot is weak, and take late drops on runs you already need. Skip farming a full tank set before 60.",
        groups: [
          {
            id: "do-first",
            tone: "do",
            label: "Do first",
            hint: "The late shield upgrade if Blackmaw Hold is already on the route.",
            entries: [
              { itemId: "bloodfur-bulwark" }
            ]
          },
          {
            id: "already-there",
            tone: "keep",
            label: "If you're already there",
            hint: "Take these only when the dungeon is already planned.",
            entries: [
              { itemId: "stoneshell-guard" },
              { itemId: "arbiters-blade" },
              { itemId: "guardian-talisman" }
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
      },
      readiness: {
        title: "Tank readiness",
        intro: "What to gear for in dungeons and raids, and which numbers are worth watching.",
        groups: [
          {
            id: "leveling-dungeons",
            label: "Leveling dungeons",
            priority: "Start with a level-appropriate shield, armor and Stamina.",
            detail: "Don't chase a Defense target while leveling. Block is useful against packs of smaller melee hits. If you run dry before the pull ends, Intellect gives you more mana; if enemies peel off you, spell power can help with Holy threat."
          },
          {
            id: "level-60-dungeons",
            label: "Level-60 dungeons",
            priority: "Keep the sturdy shield and health pool; add Defense as you find upgrades.",
            detail: "Check what the enemy actually does. Block chance is how often you block; block value is how much a normal block takes off the hit. Neither helps against damage you can't block. A raid Defense target isn't a dungeon entry requirement."
          },
          {
            id: "raid-bosses",
            label: "Raid bosses",
            priority: "Gear for the boss: Defense for melee crits, armor for physical hits, Stamina for bursts.",
            detail: "Uncrittable means the attacker can't land a melee crit; uncrushable means it can't land a crushing blow. These are separate outcomes, and the attacker's level matters: a level-63 boss is not the same check as a level-60 enemy. Check with the raid about mitigation, resistances and threat for the fight."
          }
        ],
        example: "At level 60, if your sheet shows 400 Defense skill with temporary effects off, that's 40 skill short of the cited 440 boss-crit target. It doesn't tell you whether you can be crushed. Read your block chance separately: Holy Shield can run out of charges before it's ready again, and Redoubt only helps while the proc lasts. Neither is permanent coverage.",
        mechanics: "For patch 1.60.1, the guides cite 440 total Defense skill for melee crit immunity against a level-63 boss. Method discusses a separate crush threshold based on miss, dodge, parry and block, but isn't sure Protection can sustain it. These are gearing references, not universal requirements or proof of how every raid boss behaves.",
        links: [
          { label: "Method Forever Protection stats (updated 2026-11-20)", url: "https://www.method.gg/wow-forever/class-guides/protection-paladin/bis-gear-and-stats#stat-prio" },
          { label: "Forever Protection stat guide (updated 2026-10-28)", url: "https://www.wowhead.com/forever/guide/classes/paladin/protection/stat-priority-pve-tank" },
          { label: "Holy Shield spell", url: "https://www.wowhead.com/forever/spell=20925/holy-shield" },
          { label: "Redoubt talent", url: "https://www.wowhead.com/forever/spell=20127/redoubt" }
        ]
      }
    }
  ]
};
