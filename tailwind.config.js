// [REFACTORED] Ultra-luxury hospitality palette: obsidian noir, champagne gold, imperial burgundy, and editorial typography
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#08090b',       // Deep Obsidian Noir
          surface: '#0f1115',    // Velvet Dark Surface
          card: '#15171d',       // Elevated Dark Container
          border: '#23262f',     // Quiet Architectural Line
          gold: {
            DEFAULT: '#c9a86a',  // Refined Champagne Gold (non-brassy)
            light: '#dfc79b',    // Radiant Champagne Highlight
            dark: '#9a7a3e',     // Burnished Antique Gold
            subtle: 'rgba(201, 168, 106, 0.08)',
            glow: 'rgba(201, 168, 106, 0.22)'
          },
          maroon: {
            DEFAULT: '#661421',  // Imperial Royal Burgundy
            light: '#7e1c2b',
            dark: '#4a0b16',
            subtle: 'rgba(102, 20, 33, 0.12)'
          },
          ivory: {
            DEFAULT: '#fcfaf6',  // Warm Editorial White
            warm: '#f3ece2',
            muted: '#a8a297'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.22em',
        luxury: '.18em',
        tightest: '-.025em'
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(201, 168, 106, 0.18)',
        'gold-subtle': '0 0 20px -3px rgba(201, 168, 106, 0.12)',
        'luxury-card': '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
}
