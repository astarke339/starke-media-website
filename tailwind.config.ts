import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Black paint, deep emerald, polished gold
        ink: '#030504',
        abyss: '#06110D',
        line: '#123227',
        emerald: {
          900: '#04150F',
          800: '#082A1F',
          700: '#0D3D2D',
          500: '#17694D',
          300: '#5FB591',
        },
        gold: '#C9A35E',
        'gold-light': '#E6CB93',
        bone: '#EAE6DD',
        mist: '#8FA39A',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
}
export default config
