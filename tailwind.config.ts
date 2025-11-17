import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nude-light': '#F8E8E0',
        'nude-medium': '#E8D5D0',
        'rose-soft': '#D4A5A0',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        'text-light': '#9B9B9B',
        'bg-cream': '#FDFBF9',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
