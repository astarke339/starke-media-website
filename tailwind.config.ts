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
        // Racing green paint and satin bronze film
        racing: '#063831',
        'racing-deep': '#03231E',
        bronze: '#B8935C',
        'bronze-light': '#D4B07A',
        bone: '#ECE5D8',
        sage: '#A3B8AF',
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
