/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero-bg.png')",
        "studio-pattern": "url('/src/assets/images/mobile.png')",
        "testimonials-pattern": "url('/src/assets/images/testimonials.jpg')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
