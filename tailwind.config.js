/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'msi-purple': '#351c5a',
        'msi-orange': '#e1872b',
        'msi-blue': '#1891cd'
      },
      fontFamily: {
        'averia': ['Lato'],
        'schoolbell': ['Lato']
      }
    },
  },
  plugins: [],
}
