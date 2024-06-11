/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#808000",
        "dark": "#1e1e1e",
        "light": "#f5f5f5",
        "dark-blue": "#0f172a",
        "lightBlue": "#eed9c4",
      },
      fontFamily: {
        
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Allura", "cursive"],
        cursive2: ["Pacifico", "cursive"],
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
}