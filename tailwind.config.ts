import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
        label: ['Space Grotesk', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        'dc-bg': '#FAFAF8',
        'dc-bg-alt': '#F2F0EB',
        'dc-dark': '#0D1B2A',
        'dc-text': '#1a1a1a',
        'dc-body': '#6b6b6b',
        'dc-muted': '#9a9a9a',
        'dc-gold': '#C9A84C',
        'dc-aqua': '#B8DDE4',
        'dc-divider': '#E5E3DE',
        'dc-whatsapp': '#25D366',
        'dc-dark-hover': '#1a3a5c',
        // Stitch design system
        'st-primary': '#000d22',
        'st-primary-container': '#0a2342',
        'st-secondary': '#006689',
        'st-surface': '#faf9fc',
        'st-surface-container': '#efedf0',
        'st-surface-container-high': '#e9e7eb',
        'st-background': '#faf9fc',
        'st-on-background': '#1b1b1e',
        'st-on-surface': '#1b1b1e',
        'st-on-surface-variant': '#44474e',
        'st-outline': '#74777e',
        'st-outline-variant': '#c4c6cf',
        'st-sand': '#F8F6F1',
        'st-sandwarm': '#E8DCC8',
        'st-aqua': '#1A8FBD',
      },
      spacing: {
        'section-gap': '128px',
        'container-max': '1440px',
        'gutter': '24px',
      },
      borderRadius: {
        'st': '0.125rem',
        'st-lg': '0.25rem',
        'st-xl': '0.5rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%': { transform: 'scale(1.15)', opacity: '0.3' },
          '100%': { transform: 'scale(1.25)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
