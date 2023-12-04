/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3E5E3F",
        white: "#FFFFFF",
        plants: "#5C821A",
        newgrowth: "#C6D166",
        blackish_gray: "#333333",
        light_gray: "#D9D9D9",
      },
      boxShadow: {
        around: "0px 0px 1.2rem 0.5px #D9D9D9",
      },
      borderWidth: {
        3: "3px",
      },
      height: {
        1.5: "2px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
