# Working on Horde Field Notes

Read `README.md` for the product design and `docs/vertical-slice.md` for the current acceptance criteria and checked sample facts. Keep decisions usable by the next maintainer; update these files if a product constraint actually changes.

- Use static HTML, CSS and a little vanilla JS. Data lives in small per-spec or per-profession files; use one shared renderer, with optional fields rather than a framework or a generic schema. Stable slug IDs for sections and items; add a content file rather than copying a template.
- Keep “what, where, why” visible without interaction. A compact hover/focus preview shows gear stats; an accessible click/tap/keyboard disclosure shows the same stats and full acquisition notes. Preview must not steal focus, hide important controls, or cause duplicate announcements. It should remain usable on pointer movement, and Escape should dismiss a transient preview. Use native semantics where practical. Never require hover, JS from an external site, or visiting an external link to get the in-game instructions.
- Use WoW **Forever** and **Horde** sources. Keep a source for stats and a source for acquisition when they differ. Note disagreements or omit unverified numbers; don’t copy Classic assumptions. Never confuse an equip requirement, quest minimum, expected run level or profession skill. Don’t fill missing fields with guesses.
- No auction-house epics, accounts, backend, scraping pipeline, build system, CMS, private notes, analytics, or third-party assets/scripts in this slice. Do not create a remote or publish without explicit authorization.
- Verify basic JS/data syntax and browser behavior with the checks in the slice brief. Report exactly which checks ran. Don’t edit unrelated files.
