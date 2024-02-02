import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '0.2', color: "#3180D1" },
          '50%': { opacity: '1', color: "#EB640A" },
        },
        change: {
          '0%, 100%': { content: 'url("/assets/hero_curve_inactive.png")', transform: 'translateX(0%)' },
          '50%': { content: 'url("/assets/hero_curve_active.png")', transform: 'translateX(100%)' },
        },
        marquee: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        fade: 'fade 2s ease-in-out 1s infinite alternate',
        change: 'change 2s ease-in-out 1s infinite alternate',
        marquee: 'marquee 50s ease-in-out -5s infinite reverse',
      },
      content: {
        image: 'url("/assets/hero_curve_inactive.png")',
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, #3180D1 0deg, #EB640A 180deg, #3180D1 360deg)",
        "image": "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/footer_bg_1.png')"
      },
      colors: {
        "white": "#FFFFFF",
        "blue-100": "#3180D1",
        "blue-80": "#5A99DA",
        "blue-60": "#83B3E3",
        "blue-40": "#ADCCED",
        "blue-20": "#D6E6F6",
        "orange-100": "#EB640A",
        "orange-80": "#EF833B",
        "orange-60": "#83B3E3",
        "orange-40": "#F7C19D",
        "orange-20": "#FBE0CE",
        "black-100": "#181918",
        "black-80": "#464746",
        "black-60": "#747574",
        "black-40": "#A3A3A3",
        "black-20": "#D1D1D1",
        "gray-100": "#CACACA",
        "gray-80": "#D5D5D5",
        "gray-60": "#DFDFDF",
        "gray-40": "#EAEAEA",
        "gray-20": "#F4F4F4",

      },
      boxShadow: {
        'base': '0 0.2rem 0.4rem 0 rgba(0,0,0,0.2);',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
