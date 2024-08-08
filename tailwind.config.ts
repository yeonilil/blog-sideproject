import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "744px",
        // => @media (min-width: 744px) { ... }
        lg: "1200px",
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          100: "#787878",
          200: "#6B6B6B",
          300: "#5E5E5E",
          400: "#525252",
          500: "#454545",
          600: "#373737",
          700: "#2B2B2B",
          800: "#1F1F1F",
          900: "#121212",
          950: "#050505",
        },
        gray: {
          100: "#DEDEDE",
          200: "#C4C4C4",
          300: "#ABABAB",
          400: "#919191",
        },
        blue: {
          100: "#FFFFFF",
          200: "#ECEFF4",
          300: "#CBD3E1",
          400: "#ABB8CE",
          500: "#8B9DBC",
          600: "#6A82A9",
          700: "#52698E",
          800: "#40516E",
          900: "#2D394E",
          950: "#1A212D",
        },
        bg: {
          100: "#1e1e20",
        },
        state: {
          error: "#FF6577",
        },
    },
  },
  plugins: [
    
  ],
}};

export default config;

