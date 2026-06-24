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
  borderRadius: { base: '8px', lg: '12px' },
  fonts: { base: 'Inter, sans-serif' },
} as const

export const themeBetaConfig = {
  colors: {
    primary: '#059669',
    primaryHover: '#047857',
    background: '#f0fdf4',
    surface: '#ffffff',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#d1fae5',
    error: '#dc2626',
  },
  borderRadius: { base: '4px', lg: '8px' },
  fonts: { base: 'Inter, sans-serif' },
} as const

export const themeGammaConfig = {
  colors: {
    primary: '#ea580c',
    primaryHover: '#c2410c',
    background: '#fff7ed',
    surface: '#ffffff',
    text: '#1c1917',
    textMuted: '#78716c',
    border: '#fed7aa',
    error: '#dc2626',
  },
  borderRadius: { base: '12px', lg: '20px' },
  fonts: { base: 'Inter, sans-serif' },
} as const

export type ThemeConfig = typeof themeAlphaConfig
