export interface ThemeConfig {
  colors: {
    primary: string
    primaryHover: string
    background: string
    surface: string
    text: string
    textMuted: string
    border: string
    error: string
  }
  borderRadius: {
    base: string
    lg: string
    full: string
  }
  fonts: {
    base: string
    heading: string
  }
  spacing: {
    cardPadding: string
    inputPadding: string
    gap: string
  }
}

// Default — neutral blue, fallback when no brand theme is active
export const themeDefaultConfig: ThemeConfig = {
  colors: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    error: '#dc2626',
  },
  borderRadius: { base: '6px', lg: '10px', full: '9999px' },
  fonts: {
    base: 'var(--font-inter), system-ui, sans-serif',
    heading: 'var(--font-inter), system-ui, sans-serif',
  },
  spacing: { cardPadding: '24px', inputPadding: '10px 14px', gap: '16px' },
}

// Alpha — modern SaaS, purple, Inter, soft rounded corners
export const themeAlphaConfig: ThemeConfig = {
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
  borderRadius: { base: '8px', lg: '12px', full: '9999px' },
  fonts: {
    base: "var(--font-inter), 'Inter', sans-serif",
    heading: "var(--font-inter), 'Inter', sans-serif",
  },
  spacing: { cardPadding: '24px', inputPadding: '10px 14px', gap: '16px' },
}

// Beta — fintech/banking, emerald, Georgia serif headings, sharp corners
export const themeBetaConfig: ThemeConfig = {
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
  borderRadius: { base: '2px', lg: '4px', full: '4px' },
  fonts: {
    base: "var(--font-inter), 'Inter', sans-serif",
    heading: "Georgia, 'Times New Roman', serif",
  },
  spacing: { cardPadding: '32px', inputPadding: '8px 12px', gap: '20px' },
}

// Gamma — consumer product, orange, max roundness, airy spacing
export const themeGammaConfig: ThemeConfig = {
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
  borderRadius: { base: '16px', lg: '24px', full: '9999px' },
  fonts: {
    base: "'Trebuchet MS', 'Segoe UI', sans-serif",
    heading: "'Trebuchet MS', 'Segoe UI', sans-serif",
  },
  spacing: { cardPadding: '28px', inputPadding: '12px 16px', gap: '24px' },
}
