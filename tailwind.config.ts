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
      },
    },
  },
  plugins: [],
}
export default config
