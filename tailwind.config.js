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
        pri: "#fed130",
        sec: "#e0506b",
        light: "#FFFFFF",
        dark: "#121212",
      },

      fontSize: {
        xxxsm: ["0.625rem", "1rem"],
        xxsm: ["0.75rem", "1.125rem"],
        xsm: ["0.875rem", "1rem"],
        sm: ["1rem", "1.25rem"],
        md: ["1.125rem", "1.325rem"],
        lg: ["1.25rem", "1.625rem"],
        xlg: ["1.5rem", "1.75rem"],
        xxlg: ["1.75rem", "2rem"],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      fontFamily: {
        belle: "Bellefair, serif",
        pop: "Poppins, sans-serif",
        stix: "STIX Two Text, serif",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
