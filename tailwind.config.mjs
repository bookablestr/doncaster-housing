/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFBFB",
        foreground: "var(--foreground)",
        primaryBlue: {
          DEFAULT: "#054678",
          light: "#0981DE",
          secondary: "#CCE9FF",
        },

        gray: {
          DEFAULT: "#2E2F38",
        },
        text: {
          DEFAULT: "#FFFBFB",
          dark: "#121212",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #FFFFFF 20%, #1B54A9 80%)",
        bg: "url('../images/hero.png')",
        // desktop: "url('../images/header-img.png')",
        // accessTorch: "url('../images/access-image2.png')",
      },
      fontFamily: {
        quicksand: "var(--font-quick-sand)",
        nunito: "var(--font-nunito)",
        tangerine: "var(--font-tangerine)",
        raleway: "var(--font-raleway)",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
