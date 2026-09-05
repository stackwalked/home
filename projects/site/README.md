# site

Minimal Nuxt app for `tsui.moe`, configured for Cloudflare Workers. The landing
page contains only the domain name and a “Coming soon.” placeholder.

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
