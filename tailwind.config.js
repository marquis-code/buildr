const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'olg-blue': '#3a75a4',
        gray: {
          25:  "#fafafa",
          50:  "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          925: "#0d0d0d",
        },
      },
      screens: {
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  variants: {
    extend: {
      "vtd-primary": colors.sky, // Light mode Datepicker color
      "vtd-secondary": colors.gray,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss/plugin')
    // plugin(function({ addUtilities }) {
    //   addUtilities({
    //     '.bg-green-striped': {
    //       'background-image': `linear-gradient(45deg, #0a2000 10%, transparent 10%,
    //         transparent 20%, #0a2000 20%, #0a2000 30%, transparent 30%, transparent 40%,
    //         #0a2000 40%, #0a2000 50%, transparent 50%, transparent 60%, #0a2000 60%,
    //         #0a2000 70%, transparent 70%, transparent 80%, #0a2000 80%, #0a2000 90%,
    //         transparent 90%, transparent)`,
    //     },
    //   })
    // })
  ],
}