/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF3C2",
        blue: {
          100: "#1a237e",
        },
      },
    },
  },
  plugins: [],
};
