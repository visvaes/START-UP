/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          DEFAULT: '#0ea5ff',
          600: '#0284c7'
        },
        navy: '#061126'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(2, 6, 23, 0.5)'
      }
    }
  },
  plugins: []
}
