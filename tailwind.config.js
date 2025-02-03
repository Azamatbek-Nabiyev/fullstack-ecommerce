/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        medium: ['Medium'],
        regular: ['Regular'],
        extrabold: ['ExtraBold'],
      },
    },
  },
  plugins: [],
};
