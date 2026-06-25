# Architecture

Pretty simple split:

**player-shell** owns all the logic — pages, auth, API calls, translations, routing.

**theme-tenant-alpha** is just visuals. CSS variables, two components (BrandButton, BrandCard). Zero business logic. In a real setup you'd publish it as an npm package.

Themes work by toggling a CSS class (`.theme-alpha`, `.theme-default`) on the wrapper div. Each class has its own set of CSS variables. Tailwind config points to those variables, so you write `bg-primary` and it just picks whatever the active theme defines.

API layer sits behind `ApiProvider` — a React context that injects the API implementations. Pages call `useBillingApi()`, `useIdentityApi()` and don't care whether it's mocking or hitting a real server. To switch from mocks to production endpoints you only touch the provider.

All text lives in `src/i18n/en.ts` (and `de.ts`, `uk.ts`). `useTranslation()` reads the locale from TenantContext and hands back the right object. No hardcoded strings in components.

One rule: CSS imports only in `layout.tsx`. Nothing else imports token files.
