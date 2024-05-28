/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "firs-color":"#fb4041"
      }, 
      dropShadow : {
        '3xl': '2px 6px 1px #dedede',
      }
    },
  },
  plugins: [],
}

