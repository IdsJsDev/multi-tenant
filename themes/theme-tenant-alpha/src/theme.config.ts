export const themeAlphaConfig = {
  colors: {
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    background: '#fafafa',
    surface: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    error: '#dc2626',
  },
  borderRadius: {
    base: '8px',
    lg: '12px',
  },
  fonts: {
    base: 'Inter, sans-serif',
  },
} as const

export type ThemeConfig = typeof themeAlphaConfig
