/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/*.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}