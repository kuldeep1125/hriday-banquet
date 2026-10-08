// [REFACTORED] Complete Luxury Redesign Design System Tokens (Warm Charcoal #0F0F0F, Elegant Gold #D4AF37, Soft Ivory #F5F0E8)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f0f0f',       // Deep warm charcoal (never pure black)
          surface: '#151515',    // Secondary warm charcoal surface
          card: '#1a1a1a',       // Elevated container card
          border: '#282828',     // Architectural line
          gold: {
            DEFAULT: '#d4af37',  // Soft, elegant gold
            light: '#e6c665',    // Luminous champagne highlight
            dark: '#a6821e',     // Burnished antique gold
            muted: '#c9a227',    // Refined muted gold
            subtle: 'rgba(212, 175, 55, 0.12)',
            glow: 'rgba(212, 175, 55, 0.22)'
          },
          maroon: {
            DEFAULT: '#6b1426',  // Ceremonial burgundy
            light: '#841b31',
            dark: '#4f0c1a',
            subtle: 'rgba(107, 20, 38, 0.12)'
          },
          ivory: {
            DEFAULT: '#f5f0e8',  // Warm off-white / soft ivory
            warm: '#faf6f0',
            muted: '#a8a29a'     // Refined muted text
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
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.22)',
        'gold-subtle': '0 0 20px -3px rgba(212, 175, 55, 0.14)',
        'luxury-card': '0 20px 45px -15px rgba(0, 0, 0, 0.65)',
      }
    },
  },
  plugins: [],
}
