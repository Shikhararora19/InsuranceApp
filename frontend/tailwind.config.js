const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "// ✅ Scan all React components for Tailwind classes",
    "./node_modules/@heroui/theme/dist/components/form.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"),heroui()],
};
