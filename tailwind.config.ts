import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '0.5rem'
    },
    extend: {
     colors:{
      black: "#0F0F0F",
      gray: "#272727",
      red: "#FF0000",
      white: "#F1F1F1"
     }
    },
  },
  plugins: [],
};
export default config;
