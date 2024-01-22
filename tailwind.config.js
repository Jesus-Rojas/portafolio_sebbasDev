/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Open Sans', 'sans-serif',''],
      // },
    },
  },
  plugins: [],
}

