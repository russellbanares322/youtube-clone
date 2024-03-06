import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '0.2rem'
    },
    extend: {
     colors:{
      black: "#111213",
      gray: "#272727",
      "light-gray": "#595959",
      red: "#FF0000",
      white: "#F1F1F1"
     }
    },
  },
  plugins: [],
};
export default config;
