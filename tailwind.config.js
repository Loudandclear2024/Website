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
      backgroundImage: {
        "hero-img-overlay":
          "linear-gradient(180deg, rgba(12, 16, 19, 0.63) 18.94%, rgba(12, 16, 19, 0.00) 100%);",
      },
    },
  },
  plugins: [],
}
