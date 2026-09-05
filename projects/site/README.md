# site

Nuxt app for `tsui.moe`, configured for Cloudflare Workers. The landing page
uses the supplied overexposed sky and a small footer with the site name and
a click-to-open menu. Clicking the menu again, clicking outside it, or pressing
Escape closes it. Destinations remain visibly unavailable until their pages exist.

Site copy is lowercase unless explicitly requested otherwise; see `AGENTS.md`.
The sky is `public/landing-sky.webp`. Barlow Condensed is hosted locally, with
its OFL license in `public/fonts/`.

From the repository root:

```sh
bun install
bun run site:dev
bun run check
bun run site:build
bun run site:preview
```

The preview command runs the production build locally in Wrangler; build first.
TypeScript is pinned to the 5.9 series for compatibility with `vue-tsc`.

## Cloudflare

`wrangler.jsonc` selects the `tsui.moe` account and declares `tsui.moe` as a
custom domain for the `tsui-moe` Worker. It uses Nitro's Cloudflare module output
and serves static files from `.output/public`.

Wrangler login credentials stay in the user's Wrangler configuration outside
this repository. To check or renew authentication from this package:

```sh
bun run wrangler whoami
bun run wrangler login
```

To validate packaging without uploading or deploying:

```sh
bun run build
bun run wrangler deploy --dry-run
```

No deployment or live domain/DNS changes were made during setup. The custom
domain configuration takes effect when a deployment is explicitly requested.
There is no automatic deployment workflow.

References: [Cloudflare's Nuxt guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/more-web-frameworks/nuxt/)
and [Workers custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
