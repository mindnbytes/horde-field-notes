window.HORDE_FIELD_NOTES = window.HORDE_FIELD_NOTES || {};

window.HORDE_FIELD_NOTES.blacksmithing = {
  id: "blacksmithing",
  navLabel: "Blacksmithing",
  navDetail: "Profession",
  kicker: "Profession · Blacksmithing",
  title: "Blacksmithing",
  sectionTitle: "Gold-making · test one, watch one",
  lede: "Try one Silver Rod commission for an enchanter. Watch for Heavy Weightstone orders before buying stock.",
  scope: "Prices and demand vary by market. Recipe skill means Blacksmithing; character-level gates are listed separately.",
  notesTitle: "Before you sell",
  notes: [
    { title: "Check demand", text: "Ask in Trade whether anyone needs a rod or a quest batch. For a commission, agree on the fee and who supplies the materials before crafting. If testing the Auction House, list one rod or one small batch and see if it sells before restocking." },
    { title: "Price one craft before you make it", text: "Example: a 12s sale minus 10s of inputs and 1s of fees or lost deposits leaves 1s. Count what you could sell gathered materials for, plus any relisting or recipe costs. Skip if the expected proceeds do not cover inputs and fees." }
  ],
  leveling: {
    title: "Leveling Blacksmithing",
    intro: "A sourced 1–300 route built to stay cheap: trainer recipes first, drop plans only when their band comes up. Ranges are suggested swap points, not recipe requirements, and yellow or green crafts can take extra attempts. Buy materials for one band at a time.",
    before: [
      {
        title: "Ranks, trainers and the hammer",
        text: "Buy a Blacksmith Hammer before any metal craft. Apprentice: Ug'thok, Orgrimmar 80.8, 23.7. Journeyman: 50 skill and character level 10, cap 150 — Snarl, Orgrimmar 79.6, 23.3. Expert: 125 skill and level 20, cap 225 — Saru Steelfury, Orgrimmar 82.3, 23.0. Artisan: 200 skill and character level 35, cap 300 — Brikk Keencraft, Booty Bay 29.0, 75.4. Learn the next rank before you reach its cap; profession skill and character level are separate gates.",
        links: [
          { label: "60.tools · Forever trainer stops", url: "https://www.60.tools/guides/blacksmithing-leveling-guide#trainers" },
          { label: "ForeverWowCraft · Horde blacksmithing route", url: "https://foreverwowcraft.com/routes/eupvp--horde/blacksmithing/" }
        ]
      },
      {
        title: "Price per expected point",
        text: "Realm prices and plan stock vary. There is no reliable total cost, and a yellow craft is not a guaranteed skill-up. Compare each step's cost per expected point after what the product vendors for and any plan cost; do not count on selling outputs. Stop and re-price rather than buying a whole 1–300 shopping list up front."
      },
      {
        title: "Drop plans are gates",
        text: "Mithril Spurs (learn 210), Thorium Bracers (requires 230) and the Radiant Belt, Boots and Leggings plans (learn 235, 265, 280) are drops, not trainer recipes. Confirm you can buy or farm each plan before its band; otherwise use the listed alternative or pause while you re-price."
      }
    ],
    groups: [
      {
        id: "blacksmithing-rough",
        label: "1–75 · Rough stones",
        steps: [
          ["1–25 Rough Sharpening Stone", "1 Rough Stone per craft"],
          ["25–75 Rough Grinding Stone", "2 Rough Stone per craft; yellow 45, green 65, grey 85. Keep at least 10 stones for the Silver Rod step."]
        ],
        text: "Train Journeyman with Snarl at 50 skill and character level 10; Apprentice caps at 75. Treat 25–75 as the grinding-stone band, not a promise of one point per craft.",
        links: [
          { label: "60.tools · Forever leveling guide", url: "https://www.60.tools/guides/blacksmithing-leveling-guide" },
          { label: "ForeverWowCraft · Horde blacksmithing route", url: "https://foreverwowcraft.com/routes/eupvp--horde/blacksmithing/" }
        ]
      },
      {
        id: "blacksmithing-copper-bronze",
        label: "75–125 · Silver Rod to bronze",
        steps: [
          ["75–80 Silver Rod", "1 Silver Bar + 2 Rough Grinding Stone per craft; trainer recipe at 75. Save 10 stones for the five rods."],
          ["80–95 Runed Copper Belt", "10 Copper Bar per craft; learn 80, yellow 85."],
          ["95–100 Rough Bronze Leggings", "6 Bronze Bar per craft"],
          ["100–110 Heavy Weightstone", "1 Heavy Stone per craft; learn 100, expect extra attempts"],
          ["110–125 Rough Bronze Leggings", "6 Bronze Bar per craft; yellow at 120"]
        ],
        text: "If copper is pricey, compare Big Bronze Knife from 80 skill (6 Bronze Bar, 4 Weak Flux, 2 Rough Grinding Stone, 1 Tigerseye, 1 Medium Leather). For 110–125, compare Bronze Shortsword (5 Bronze Bar, 4 Weak Flux, 2 Medium Leather); it stays orange through 124. Train Expert with Saru Steelfury at 125.",
        links: [
          { label: "Forever · Silver Rod recipe (7818)", url: "https://wowforevertalents.com/professions/blacksmithing/smaller-headings/#r-7818" },
          { label: "Forever · Runed Copper Belt recipe (2666)", url: "https://wowforevertalents.com/professions/blacksmithing/mail-belts/#r-2666" },
          { label: "60.tools · Big Bronze Knife (3491)", url: "https://www.60.tools/recipes/3491" },
          { label: "60.tools · Bronze Shortsword (2742)", url: "https://www.60.tools/recipes/2742" },
          { label: "Forever · Heavy Weightstone recipe (3117)", url: "https://wowforevertalents.com/professions/blacksmithing/weapon-stones/#r-3117" }
        ]
      },
      {
        id: "blacksmithing-iron",
        label: "125–200 · Iron and steel",
        steps: [
          ["125–129 Iron Buckle", "1 Iron Bar per craft; grey 130"],
          ["129–140 Patterned Bronze Bracers", "5 Bronze Bar + 2 Coarse Grinding Stone per craft; each stone is 2 Coarse Stone. A beta-based guide lists learn 95 — confirm at your trainer."],
          ["140–175 Green Iron Bracers", "6 Iron Bar + 1 Green Dye per craft; learn 140, yellow 165"],
          ["175–183 Solid Weightstone", "1 Solid Stone per craft. If you plan Mithril Spurs, Solid Grinding Stone (4 Solid Stone each, grey 185) builds that stock instead."],
          ["183–200 Golden Scale Bracers", "5 Steel Bar + 2 Heavy Grinding Stone per craft; 3 Heavy Stone per grinding stone. Trainer recipe at 175, yellow 185."]
        ],
        text: "At 200, train Artisan with Brikk Keencraft in Booty Bay (29.0, 75.4): 200 skill and character level 35, cap 300. Character level 35 is the trainer gate, not a solo or travel recommendation.",
        links: [
          { label: "Forever · Grinding stones and Iron Buckle", url: "https://wowforevertalents.com/professions/blacksmithing/smaller-headings/#reagents" },
          { label: "60.tools · Forever leveling guide", url: "https://www.60.tools/guides/blacksmithing-leveling-guide" }
        ]
      },
      {
        id: "blacksmithing-mithril",
        label: "200–250 · Mithril to early Thorium",
        steps: [
          ["200–210 Heavy Mithril Gauntlet", "6 Mithril Bar + 4 Mageweave Cloth per craft; yellow 200, grey 220"],
          ["210–225 Mithril Spurs", "Drop plan; 4 Mithril Bar + 3 Solid Grinding Stone per craft, orange to 230. Without the plan, keep gauntlets to 215, then Heavy Mithril Breastplate (16 Mithril Bar) to 225."],
          ["225–233 Dense Weightstone", "1 Dense Stone per craft; trainer recipe, yellow 230, grey 235"],
          ["233–250 Thorium Bracers", "Drop plan requiring 230 Blacksmithing; 12 Thorium Bar + 4 Blue Power Crystal per craft, yellow at 250. Compare the Horde Auction House price for the crystals with gathering them in Un'Goro."]
        ],
        text: "If the spurs plan is not available at a workable price, the gauntlet-plus-breastplate line avoids it; re-price both lines before choosing. Keep the 215–225 swap as a fallback, not a second stockpile.",
        links: [
          { label: "60.tools · Heavy Mithril Gauntlet (9928)", url: "https://www.60.tools/recipes/9928" },
          { label: "60.tools · Mithril Spurs (9964)", url: "https://www.60.tools/recipes/9964" },
          { label: "60.tools · Thorium Bracers (16644)", url: "https://www.60.tools/recipes/16644" },
          { label: "Forever · Blue Power Crystal market and recipe use", url: "https://outof.games/realms/forever/item/11184-blue-power-crystal/" }
        ]
      },
      {
        id: "blacksmithing-thorium",
        label: "250–300 · Radiant Thorium",
        steps: [
          ["250–265 Radiant Belt", "Drop plan learn 235; 10 Thorium Bar + 2 Heart of Fire per craft; yellow 255, green 265."],
          ["265–280 Radiant Boots", "Drop plan learn 265; 14 Thorium Bar + 4 Heart of Fire per craft. Orange through 284, so stay on boots to 285 if their net cost per craft is lower."],
          ["280–300 Radiant Leggings", "Drop plan learn 280; 20 Thorium Bar + 4 Heart of Fire per craft; orange through 299."]
        ],
        text: "Buy each late plan only if price and supply work. If Heart of Fire is expensive, compare Thorium Leggings (drop plan at 275; 26 Thorium Bar + 4 Red Power Crystal; yellow at 295). Keep the Mithril Warhammer's 10 Heavy Weightstone turn-in separate from leveling spend.",
        links: [
          { label: "Forever · Radiant Belt recipe (16645)", url: "https://wowforevertalents.com/professions/blacksmithing/mail-belts/#r-16645" },
          { label: "60.tools · Radiant Boots (16656)", url: "https://www.60.tools/recipes/16656" },
          { label: "60.tools · Radiant Leggings (16725)", url: "https://www.60.tools/recipes/16725" },
          { label: "60.tools · Thorium Leggings (16662)", url: "https://www.60.tools/recipes/16662" }
        ]
      }
    ]
  },
  items: [
    {
      id: "silver-rod",
      name: "Silver Rod",
      bracket: "75 skill · Test now",
      chips: ["TEST NOW", "Enchanter tool", "1 output"],
      source: "Blacksmithing trainer · skill 75",
      reason: "A basic enchanter tool; offer one buyer-supplied craft instead of stocking rods.",
      stats: [
        { label: "Output", value: "1 Silver Rod" },
        { label: "Use", value: "Enchanter tool for Runed Silver Rod" },
        { label: "Craft", value: "1 Silver Bar + 2 Rough Grinding Stones" }
      ],
      meta: [
        { label: "Profession skill", value: "75 Blacksmithing" },
        { label: "Recipe source", value: "Trainer; check a city Blacksmithing trainer or trainer list" },
        { label: "Character level", value: "Not listed as a recipe gate; trainer rank requirements still apply" }
      ],
      costs: [
        { label: "Per craft", value: "1 Silver Bar + 2 Rough Grinding Stones" },
        { label: "Output", value: "1 Silver Rod" }
      ],
      acquisition: [
        {
          label: "Learn",
          text: "Train it at 75 Blacksmithing. 60.tools lists Snarl (Journeyman) and Saru (Expert) in Orgrimmar; any city Blacksmithing trainer or the trainer list is worth checking, but confirm this recipe is taught before relying on a specific NPC."
        },
        {
          label: "Test",
          text: "Ask an enchanter who needs a Silver Rod for Runed Silver Rod. Prefer one customer-supplied craft, with the buyer providing 1 Silver Bar and 2 Rough Grinding Stones. If you are already making rods for skill, try one sale; do not promise demand."
        },
        {
          label: "Skip",
          text: "Skip making a stack on speculation. If no enchanter is lined up, do not buy silver or grinding stones just to list rods."
        }
      ],
      caution: "Realm prices and demand vary. 75 is the profession skill from the Horde route, and a specific NPC teaching this recipe was not independently confirmed.",
      links: [
        { label: "Forever detailed recipe · Silver Rod (7818)", url: "https://wowforevertalents.com/professions/blacksmithing/smaller-headings/#r-7818" },
        { label: "Forever item record · Silver Rod (6338)", url: "https://wowforever.wclbox.com/api/open/v1/items/6338" },
        { label: "ForeverWowCraft Horde route · 75 skill", url: "https://foreverwowcraft.com/routes/eupvp--horde/blacksmithing/" },
        { label: "60.tools trainer list", url: "https://www.60.tools/guides/blacksmithing-leveling-guide#trainers" }
      ]
    },
    {
      id: "heavy-weightstone",
      name: "Heavy Weightstone",
      bracket: "100 skill · Watch later",
      chips: ["WATCH LATER", "+4 blunt damage", "1 output"],
      source: "Blacksmithing trainer · skill 100",
      reason: "A cheap blunt-weapon consumable with a quest use; make only a small batch after a confirmed order.",
      stats: [
        { label: "Effect", value: "+4 blunt weapon damage for 30 min" },
        { label: "Use level", value: "Character level 15" },
        { label: "Output", value: "1 per craft" },
        { label: "Materials", value: "1 Heavy Stone; no cloth" }
      ],
      meta: [
        { label: "Profession skill", value: "100 Blacksmithing" },
        { label: "Recipe source", value: "Trainer; check a city Blacksmithing trainer or trainer list" },
        { label: "Character level", value: "15 to use the weightstone, not to craft it" },
        { label: "Quest use", value: "10 for Step Two: More Rock" }
      ],
      costs: [
        { label: "Per craft", value: "1 Heavy Stone" },
        { label: "Output", value: "1 Heavy Weightstone" }
      ],
      acquisition: [
        {
          label: "Learn",
          text: "Train it at 100 Blacksmithing. 60.tools lists Snarl (Journeyman) and Saru (Expert) in Orgrimmar; check a city Blacksmithing trainer or the trainer list, and confirm the recipe is taught before counting on a specific NPC."
        },
        {
          label: "Watch",
          text: "Wait for a buyer: a leveling character using a blunt weapon, or someone on Step Two: More Rock who needs 10. Confirm the order or make one small batch before spending on Heavy Stone."
        },
        {
          label: "Skip",
          text: "Skip mass production. The quest turn-in is not proof of open-market demand, and a consumable that sits costs relisting time and deposits."
        }
      ],
      caution: "Level 15 is the character level to use the weightstone, not the Blacksmithing skill to make it. The 10 for Step Two: More Rock are a quest cost, not guaranteed sales.",
      links: [
        { label: "Forever detailed recipe · Heavy Weightstone (3117)", url: "https://wowforevertalents.com/professions/blacksmithing/weapon-stones/#r-3117" },
        { label: "Forever item record · Heavy Weightstone (3241)", url: "https://wowforever.wclbox.com/api/open/v1/items/3241" },
        { label: "ForeverWowCraft Horde route · 100 skill", url: "https://foreverwowcraft.com/routes/eupvp--horde/blacksmithing/" },
        { label: "Step Two: More Rock (Horde)", url: "https://www.wowhead.com/forever/quest=96026/step-two-more-rock" },
        { label: "60.tools trainer list", url: "https://www.60.tools/guides/blacksmithing-leveling-guide#trainers" }
      ]
    },
    {
      id: "mithril-warhammer",
      name: "Plans: Mithril Warhammer",
      bracket: "190 skill · Fallback",
      chips: ["FALLBACK", "190 skill", "Item 38"],
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
          text: "Use it only as a fallback if you have not landed a better two-hander; skip crafting stock for resale."
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
