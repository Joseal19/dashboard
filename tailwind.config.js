/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '73.125rem',
      },
      height: {
        95: '95%',
      },
      width: {
        95: '95%',
      },
    },
  },
  plugins: [],
}
