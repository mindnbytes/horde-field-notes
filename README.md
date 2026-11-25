# Horde Field Notes

A quick-reference site for **WoW Forever · Horde**. Open it beside the game, pick a class or profession, and find out what is worth getting next, what it does, and what to pick up before leaving town.

## Design

- Top-level destinations: **Rogue**, **Paladin**, **Blacksmithing**, **Enchanting**. Rogue starts with Combat; Paladin starts with Protection. Retribution can be added under Paladin when its content is ported.
- Leveling picks are curated, affordable targets, not exhaustive BiS lists. Show when an item is worth pursuing separately from minimum quest pickup, minimum equip level, and profession skill. Label quest rewards, boss drops, and vendor gates.
- Give classes a separate **Road to 60** checklist: Do first / If you’re already there / Skip. Make it directly reachable. Favor quest rewards and colocated upgrades over low-probability farms.
- **Stats are local content, not a live Wowhead tooltip.** Hover or focus the named item control to see its type, damage/speed/DPS or armor/block, bonuses and effects, where known. Click, tap or press Enter/Space for persistent stats and acquisition details. External sources are optional links, not required to read the answer.
- Show quest starter, prerequisites and chain order where relevant. Call out “before you go,” “starts inside,” and gate costs. Mobile must work without hover or sideways scrolling.
- Visual direction: compact dark field guide, readable beside the game, restrained warm accents, clear hierarchy and keyboard focus. Avoid decorative assets and official branding.

## Run locally

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>. No package install or build needed. If port 8000 is in use, choose another.

## Current slice

The Rogue now has a full Combat 20–60 gear route with 20–29, 30–39 and 40–49 brackets, a short before-you-start note, and a 50–60 Road to 60 checklist. Protection Paladin and the two professions remain first-slice examples. This is still a prototype for the other guides, not complete coverage everywhere.

Future content ideas are tracked in [the backlog](docs/backlog.md).

## Hosting

GitHub Pages serves the repository root from `main`. `.nojekyll` tells Pages to serve the static files as-is. Use relative asset URLs so the site works under the project path, not just at the domain root. Cloudflare Pages is an alternative if the source repository should stay private.
