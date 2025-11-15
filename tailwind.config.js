/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // tailwind is configured to be used in this files
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

