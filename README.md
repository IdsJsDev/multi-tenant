# Player Shell

Simple multi-tenant frontend demo. Two parts in one repo:

- `apps/player-shell` — the actual app (Next.js)
- `themes/theme-tenant-alpha` — theme stuff (CSS tokens, BrandButton, BrandCard)

```bash
pnpm install
pnpm dev
```

Log in and it randomly picks a theme (purple or blue). Refresh and log in again to see the other one.

```bash
pnpm test
```
