import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        background: 'var(--color-background)',
        'text-base': 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        error: 'var(--color-error)',
      },
      borderRadius: {
        base: 'var(--border-radius-base)',
        lg: 'var(--border-radius-lg)',
        full: 'var(--border-radius-full)',
      },
      fontFamily: {
        base: ['var(--font-family-base)'],
        heading: ['var(--font-family-heading)'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      padding: {
        card: 'var(--spacing-card-padding)',
        input: 'var(--spacing-input-padding)',
      },
      gap: {
        theme: 'var(--spacing-gap)',
      },
    },
  },
  plugins: [],
}

export default config
