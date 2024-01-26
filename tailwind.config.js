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
        "process-steps":
          "linear-gradient(90deg, rgba(152, 158, 163, 0.05) 2.92%, rgba(12, 16, 19, 0.09) 93.87%);",
        "process-circular":
          "radial-gradient(44% 44% at 50% 50%, #20384A 0%, rgba(12, 16, 19, 0.21) 100%);",
        testimonial:
          "linear-gradient(270deg, rgba(217, 217, 217, 0.00) 0%, rgba(102, 102, 102, 0.10) 100%);",
      },
      zIndex: {
        full: 999,
      },
    },
  },
  plugins: [],
}
