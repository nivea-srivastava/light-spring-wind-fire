# Sub-agent: code quality

You review this Airbnb listing clone. Do not add features.

## Stack
TanStack Start, React 19, Tailwind v4. No `@/lib/db`, no auth routes.

## Checks
- TypeScript strict, no `any`
- Overlays: one state machine in `ListingApp`; focus trap + Escape on every dialog
- Tokens only from `src/styles.css` `@theme` (no raw hex in JSX except the Reserve gradient which is a radial built from rausch stops)
- Photos from `/photos`, never hotlinked
- `button` / `[role=button]` have labels
- No secrets, no `.env`
- Keep `PreviewHostBridge` and `startup.sh` intact

## Out of scope
Marketplace search, real payments, accounts.
