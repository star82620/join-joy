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
      mdg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "375px" },
    },
    colors: {
      // primary-yellow
      "yellow-primary": "#FFCD00",
      "yellow-second": "#FFD44A",
      "yellow-neutral": "#FFE788",
      "yellow-tone": "#FFF4C6",
      "yellow-tint": "#FEFAF2",
      "yellow-dark": "#FAF2E2",

      // secondary-orange
      "orange-primary": "#FF8356",
      "orange-second": "#FFA584",
      "orange-neutral": "#FFC8B4",
      "orange-tone": "#FFDFD3",
      "orange-tint": "#FFF4F0",
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
      "brown-light": "#C9B896",
      "brown-dark": "#5F584A",

      danger: "#DD240B",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    fontSize: {
      "3xl": "28px",
      "2xl": "24px",
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
        "profile-img":
          "2px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 6px 0px rgba(0, 0, 0, 0.02)",
      },
      backgroundImage: {
        // input
        "eye-hide": 'url("/images/input-password-hide.svg")',
        "eye-show": 'url("/images/input-password-show.svg")',
        "follow-true": 'url("/images/icon-check.svg")',
        "follow-false": 'url("/images/icon-plus.svg")',
        "radio-true": 'url("/images/icon-radio-true.svg")',
        "radio-false": 'url("/images/icon-radio-false.svg")',
        "checkbox-true": 'url("/images/icon-checkbox-true.svg")',
        "checkbox-false": 'url("/images/icon-checkbox-false.svg")',
        // group
        "group-time": 'url("/images/group-card/icon-time.svg")',
        "group-member": 'url("/images/group-card/icon-members.svg")',
        "group-location": 'url("/images/group-card/icon-location.svg")',
        "group-tag": 'url("/images/group-card/icon-tag.svg")',
      },
      backgroundSize: {
        "20px": "20px",
      },
      lineHeight: {
        heading: "1.4rem",
        text: "1.2rem",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
      },
      width: {
        "14": "56px",
        "15": "60px",
        "22": "88px",
      },
      height: {
        "14": "56px",
        "15": "60px",
        "22": "88px",
      },
    },
  },
  plugins: [],
};
export default config;
