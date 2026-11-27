# Class gear research

Research snapshot: November 27, 2026. These are candidates for future guide work, not instructions already added to the site. Item tooltips and acquisition can change; recheck before publishing. Priorities are editorial judgments, not claims that an item is universally best.

## Protection corrections and source disagreement

- The Arctic Buckler card now distinguishes its **Blackfathom Villainy** (6561) choice from Outlaw Sabre's separate **Baron Aquanis** (6922) reward, and the Protection Road now prioritizes Inventor's Focal Sword, as required by the seed.
- **Focal Sword stats disagree between Forever sources:** [Wowhead Forever](https://www.wowhead.com/forever/item=17719/inventors-focal-sword) lists 36–67 damage, 2.20 speed, 23.41 DPS, +1% crit and up to +60 spell damage/healing, matching the current card and seed. The [WCLBox Forever item record](https://wowforever.wclbox.com/api/open/v1/items/17719) lists 54–101 damage, 2.20 speed, 35.2 DPS and +1% crit, with no spell-damage line. Checked November 27, 2026; neither source establishes which is correct in game. The spell-damage disagreement affects the threat rationale. Per user direction, leave the existing item unchanged.

## High priority: shared UBRS quest choice

**For The Horde!** is a promising late Rogue and Paladin addition, especially because it gives a choice rather than asking for a random drop. The [Forever quest record](https://wowforever.wclbox.com/en/renwu/4974) lists Thrall in Orgrimmar as giver and turn-in, level 55 minimum, prerequisite Eitrigg's Wisdom, and the objective of bringing back Warchief Rend Blackhand's head. Its chain begins with Warlord Goretooth's Command. The record states its quest information matches Classic as far as known; verify the full chain and practical UBRS access before publication.

The player chooses **one**, so a Paladin switching specs cannot assume both:

- [Blackhand's Breadth](https://wowforever.wclbox.com/api/open/v1/items/13965): +1% melee/ranged critical strike chance; use marks a target for +5% critical chance for 20 seconds, doubled against orcs or ogres, five-minute cooldown. Candidate for Rogue or Retribution.
- [Mark of Tyranny](https://wowforever.wclbox.com/api/open/v1/items/13966): +1% dodge; use adds 620 maximum health for 15 seconds, doubled in strongholds or cities, five-minute cooldown. Candidate for Protection; compare against alternatives and other spec priorities.
- Eye of the Beast is the third option. Both tooltips above differ from Classic: do not import old stats.

## Secondary candidates

- **Truestrike Shoulders**, Rogue or situational Ret: [Forever item/source](https://www.wowhead.com/forever/item=12927/truestrike-shoulders), [tooltip record](https://wowforever.wclbox.com/api/open/v1/items/12927). Pyroguard Emberseer in UBRS, not Rend; leather, level 56 equip, 129 armor, +10 Stamina, +1.5% hit and +24 attack power. Incidental boss drop on an already-planned run, not a guaranteed reward.
- **Draconian Deflector**, Protection: [Forever item/source](https://www.wowhead.com/forever/item=12602/draconian-deflector), [tooltip record](https://wowforever.wclbox.com/api/open/v1/items/12602). General Drakkisath in UBRS; level 58 equip, 2,153 armor, 40 block, +7 Stamina, +8 Fire Resistance, +10 Defense skill. Conditional drop, not a reason to require a farm.
- **Thrall's Resolve**, investigate for Protection and possibly Ret: [Forever tooltip record](https://wowforever.wclbox.com/api/open/v1/items/12544) lists 150 armor, +7 Stamina and +6 Strength; [The Royal Rescue](https://www.wowhead.com/forever/quest=4003/the-royal-rescue) lists it as a reward. Verify Horde chain, minimum, reward alternatives and comparative value before choosing a checklist priority.
- **Peacemaker**, Retribution if already running Stratholme: [Forever item/source](https://www.wowhead.com/forever/item=18725/peacemaker) lists Magistrate Barthilas, not Archivist Galford. Level 54 equip; 137–206 damage, 3.40 speed, 50.44 DPS, +1% crit and +56 attack power. Compare with existing weapons and confirm polearm access before inclusion.
- **Mithril Warhammer**, Ret fallback only: already documented in `data/blacksmithing.js` and `docs/vertical-slice.md`. Character level 38 equip and quest minimum are separate from 190 Blacksmithing. Compare with existing stronger two-handers and crafting costs before cross-linking.

## Rejected lead

**Sword of Decay** is not the guaranteed RFK quest reward suggested by the initial research. [Forever Wowhead](https://www.wowhead.com/forever/item=1727/sword-of-decay) lists a bind-on-equip rare drop, item 1727; the proposed item ID 6677 is Spellcrafter Wand. Do not add it as a quest reward or encourage farming it.
