/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins','ans-serif']
      },
      colors: {
        SpaceCadet: "#29274C",
        Zomp: "#359C9C",
        PurpleNavy: "#4F4D7B",
        Cultured: "#F8F7F4",
        LightSilver: "#D6D6D6",
      },
    },
  },
  plugins: [],
};
