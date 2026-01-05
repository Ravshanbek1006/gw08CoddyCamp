/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1:"#FF3F3A",
        primary2:"#F75E05"
      }
    },
  },
  plugins: [],
}

