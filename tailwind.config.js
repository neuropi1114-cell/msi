/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'msi-purple': '#351c5a',
        'msi-purple-deep': '#1a0d33',
        'msi-purple-light': '#5a2d82',
        'msi-orange': '#e1872b',
        'msi-orange-warm': '#e4984d',
        'msi-blue': '#1891cd',
        'msi-blue-light': '#2CB3E9',
        'msi-blue-dark': '#159ED9',
        'msi-accent': '#e85d26',
        'msi-cream': '#FCF9F4',
        'msi-ivory': '#f4f0eb',
        'msi-charcoal': '#2d2d2d',
        'msi-olive': '#6b7c5e',
        'msi-gold': '#c9a96e',
        'msi-clay': '#c4956a',
        'msi-walnut': '#4a3728',
      },
      fontFamily: {
        'lato': ['var(--font-lato)', 'sans-serif'],
        'display': ['var(--font-playfair)', 'Georgia', 'serif'],
        'fredoka': ['var(--font-fredoka)', 'sans-serif'],
        'averia': ['var(--font-averia)', 'cursive'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
      },
    },
  },
  plugins: [],
}
