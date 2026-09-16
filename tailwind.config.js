/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'msi-blue': '#159ED9',
        'msi-orange': '#d16827',
        'msi-black': '#111010',
        'msi-purple': '#351c5a',
        'msi-yellow': '#FFC000',
        'msi-green': '#ABCD52',
        'msi-purple-deep': '#271344',
        'msi-cream': '#FCF9F4',
      },
      fontFamily: {
        'lato': ['var(--font-lato)', 'sans-serif'],
        'fredoka': ['var(--font-fredoka)', 'sans-serif'],
        'schoolbell': ['"Schoolbell"', 'sans-serif'],
        'linotte': ['"Linotte-Regular"', '"Linotte Rounded"', '"Linotte"', 'var(--font-fredoka)', 'sans-serif'],
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
