# Home orchestration workspace

This repository is a Bun monorepo for coordinating work across the workspace.

- `projects/` — project inputs, working materials, and the orchestration package
- `content/` — source content
- `artifacts/` — generated deliverables
- `scripts/` — workspace scripts
- `projects/orchestrator/` — the root orchestration package

Run `bun run orchestrate` to verify the workspace is available. Run `bun run check` for the package check.

`projects/site/` contains the Nuxt landing page for `tsui.moe`, configured for
Cloudflare Workers. Start it with `bun run site:dev`, build with
`bun run site:build`, and preview the built Worker locally with
`bun run site:preview`. See [the site README](projects/site/README.md) for details.
