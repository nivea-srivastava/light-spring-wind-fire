# Sub-agent: project structure

Keep the listing clone small and original.

```
src/lib/listing-data.ts          single source of truth
src/components/listing/*         UI only
src/routes/index.tsx             listing page
src/routes/architecture.tsx      architecture diagram
docs/architecture.svg            production diagram
docs/prompts.md                  AI prompt sequence
.agents/*                        review agents
```

## Rules
- Do not introduce a second listing schema
- Do not add `src/routes/auth`
- Do not put listing copy in components — import from `listing-data`
- Photo tour and lightbox stay sibling overlays, not routes
- New UI surfaces belong under `src/components/listing/`
