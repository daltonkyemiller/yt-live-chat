/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#F1EDE7',
        dark: '#2B2B2B',
      },
      fontFamily: {
        sans: 'Euclid Circular, sans-serif',
        display: 'ivypresto-display',
      },
    },
  },
  plugins: [],
};
