# Decisions

**pnpm workspaces** — Turborepo is overkill when you have two packages. pnpm linking works fine.

**CSS variables + Tailwind** — only way to switch themes at runtime without rebuilding the CSS. Tailwind config maps utility classes to the variable names.

**react-hook-form** — uncontrolled inputs, no re-renders on every keystroke. Also the error handling is clean.

**Inline i18n (no library)** — for a demo a typed object is fine. `useTranslation()` wraps it, so swapping to next-intl later is just changing that one hook.

**ApiProvider instead of TanStack Query** — for this app the data fetching is simple enough that context-based DI works. The main goal is keeping pages decoupled from the API implementation. If this grew real caching or polling needs I'd add TanStack Query.

**Route handlers as mocks** — `/api/billing` and `/api/login` are real Next.js routes that return mock data. This way the client code makes real fetch calls, same as it would with a real backend. No magic, easy to replace.
