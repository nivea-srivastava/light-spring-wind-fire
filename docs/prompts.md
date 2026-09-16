# Sequence of prompts used for AI-assisted development

The work was done in one agent session. Prompts below are the actual instructions that drove each phase — suitable to paste into Claude Code, Codex, or Cursor.

## 1. Workspace contract
Read `AGENTS.md` and the `design-ui` skill. Auth and database stay off. Serve on the platform preview port. Scaffold TanStack Start from `.grok/references/scaffold.md`.

## 2. Reference study
Open https://airbnb-clone-umber-two.vercel.app and extract layout, type, colour, photo-grid behaviour, photo-tour overlay, and lightbox keyboard behaviour. Desktop only is required; keep a usable mobile fallback.

## 3. Tokens first
Define Airbnb tokens in `src/styles.css` `@theme` (rausch, ink, mute, hair, wash, Cereal-like sans). No ad-hoc hex in JSX.

## 4. Listing data
Create `src/lib/listing-data.ts` as the single source of truth: photos grouped by room, amenities, reviews, host, blocked dates, quote function. Fictional property, original copy.

## 5. Shell
Implement header (logo, search pill, user menu), title row (share/save), five-up photo grid with “Show all photos”, two-column listing + sticky booking card, reviews, map, host, things to know, footer.

## 6. Overlays as a state machine
`overlay: none | tour | lightbox | …`
- Hero image or Show all photos → photo tour
- Tour photo click → lightbox
- Lightbox close → tour
- Escape, focus trap, arrow keys, restored focus

## 7. Booking interactions
Custom two-month calendar, guest stepper, mouse-tracked Reserve gradient, live quote. No payments.

## 8. Accessibility
Dialog roles, labels, skip-to-content, visible focus, `prefers-reduced-motion`.

## 9. Architecture
Draw a production-scale marketplace diagram (frontend, backend, storage, search, deploy) and document how the clone maps onto it.

## 10. Sub-agent configs
Add `.agents/code-quality.md`, `.agents/project-structure.md`, `.agents/visual-fidelity.md` so a later agent can review without re-deriving conventions.

## 11. Verify
`npm run typecheck`, `npm run build`, browser smoke (desktop + mobile), interactive pass: open tour, open lightbox, arrow keys, Escape.
