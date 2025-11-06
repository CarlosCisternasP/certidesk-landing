/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        certi900: '#0D1B2A',
        certi800: '#1B263B',
        certi500: '#007BFF',
        certiAccent: '#00C6A7',
        certiBg: '#F4F6F8'
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
