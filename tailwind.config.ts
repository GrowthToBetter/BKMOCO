import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        '1/15':"8%",
        '2/15':"5%",
        "38":"38%",
        "half":"50vh",
        "1.5screen":"150vh",
      },
      colors: {
        'moklet': "#B7292E",
        "highlight":"#B7292D",
        "secondary":"#88898852",
        "hijauBorder":"#75B5A6",
        "hijauText":"#5C8F86",
        "inputCodeHijau":"#8CA19E",
        "baseHijau":"#F3F9F7",
      },
    },
  },
  plugins: [],
};
export default config;
