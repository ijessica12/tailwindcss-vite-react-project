const colors = require('tailwindcss/colors');
const { purge } = require('./tailwind-full.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "skyblue",
          DEFAULT: "skyblue",
          dark: "skyblue"
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],

    },
  },
  plugins: [],
}
