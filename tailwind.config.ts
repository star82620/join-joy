import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // desktop : lg, tablet : md, mobile: sm
      lg: { max: "1272px" },
      md: { max: "768px" },
      sm: { max: "375px" },
    },
    colors: {
      // primary-yellow
      "yellow-primary": "#FFCD00",
      "yellow-second": "#FFD44A",
      "yellow-neutral": "#FFE788",
      "yellow-tone": "#FFE788",
      "yellow-tint": "#FFD44A",
      "yellow-dark": "#FFCD00",
      // secondary-orange
      "orange-primary": "#F8E9E4",
      "orange-second": "#FFF4F0",
      "orange-neutral": "#FFDFD3",
      "orange-tone": "#FFC8B4",
      "orange-tint": "#FFA584",
      "orange-dark": "#F8E9E4",
      // Natural Gray
      "gray-950": "#272725",
      "gray-900": "#3D3D3C",
      "gray-800": "#464644",
      "gray-700": "#504F4E",
      "gray-600": "#5F5E5B",
      "gray-500": "#6F6E6B",
      "gray-400": "#8C8B88",
      "gray-300": "#B1B0AF",
      "gray-200": "#D1D1D0",
      "gray-100": "#E7E7E6",
      "gray-50": "#F6F6F5",
      // Complementary color
      "blue-light": "#3FACFB",
      "blue-dark": "#1567A3",
      "green-light": "#26C485",
      "green-dark": "#3B956B",
      "purple-light": "#DD84FC",
      "purple-dark": "#9354A9",
      danger: "#DD240B",
      white: "#FFFFFF",
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      md: "16px",
      sm: "14px",
      xs: "12px",
      xxs: "10px",
    },
    extend: {
      boxShadow: {
        btn: "2px 2px 0 0 #504F4E",
        window: "3px 2px 0 0 #504F4E",
      },
      backgroundImage: {
        "eye-hide": 'url("/images/input-password-hide.svg")',
        "eye-show": 'url("/images/input-password-show.svg")',
      },
      lineHeight: {
        heading: "1.4rem",
        text: "1.2rem",
      },
    },
  },
  plugins: [],
};
export default config;
