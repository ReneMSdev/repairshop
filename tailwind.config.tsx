/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['bg-home-img'],
  theme: {
    extend: {
      backgroundImage: {
        'home-img': "url('/images/home-img.jpg')",
      },
    },
  },
  plugins: [],
}
