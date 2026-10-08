/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0d1113',
          surface: '#151b1e',
          card: '#1d2529',
          border: '#2a343a',
          gold: {
            DEFAULT: '#c69248',
            light: '#d9a65c',
            dark: '#a87532',
            subtle: 'rgba(198, 146, 72, 0.12)'
          },
          maroon: {
            DEFAULT: '#851b2e',
            light: '#9e2238',
            dark: '#661221',
            subtle: 'rgba(133, 27, 46, 0.1)'
          },
          ivory: {
            DEFAULT: '#faf8f5',
            warm: '#f3efe8',
            muted: '#e5ded3'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.025em'
      }
    },
  },
  plugins: [],
}
