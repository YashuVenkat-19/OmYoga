/** @type {import('tailwindcss').Config} */

// const forms = require("@tailwindcss/forms");
// const typography = require("@tailwindcss/typography");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    // require("daisyui"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
};
