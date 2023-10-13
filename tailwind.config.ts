import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // tablet : md ,desktop : lg
      lg: { max: "1272px" },
      md: { max: "768px" },
      sm: { max: "375px" },
    },
    colors: {
      // primary-yellow
      "yellow-primary": "#FAF2E2",
      "yellow-second": "#FEFAF2",
      "yellow-neutral": "#FFF4C6",
      "yellow-tone": "#FFE788",
      "yellow-tint": "#FFD44A",
      "yellow-dark": "#FFCD00",
      // secondary-peach
      "peach-primary": "#F8E9E4",
      "peach-second": "#FFF4F0",
      "peach-neutral": "#FFDFD3",
      "peach-tone": "#FFC8B4",
      "peach-tint": "#FFA584",
      "peach-dark": "#FF8356",
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
    },
    fontSize: {
      xl: [
        "20px",
        {
          lineHeight: "1.5",
          fontWeight: 400,
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "1.5",
          fontWeight: 400,
        },
      ],
      md: [
        "16px",
        {
          lineHeight: "1.5",
          fontWeight: 400,
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "1.5",
          fontWeight: 400,
        },
      ],
      xs: [
        "12px",
        {
          lineHeight: "1.5",
          fontWeight: 400,
        },
      ],
      xxs: [
        "10px",
        {
          lineHeight: "1.5",
          fontWeight: 400,
        },
      ],
    },
  },
  extend: {
    boxShadow: {
      button: "2px 2px 0 0 #504F4E",
    },
  },
  plugins: [],
};
export default config;
