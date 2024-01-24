/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C1013", // Background color
        secondary: "#BEA169", // Text color (Accent color)
        "light-gray": "#C2C2C2",
        "dark-gray": "#A09E9E",
      },
    },
  },
  plugins: [],
}
