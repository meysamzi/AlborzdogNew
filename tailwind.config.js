const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        lazyLoading: {
          "0%, 100%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        slideRightToLeft: {
          "0%, 100%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "none",
          },
        },
        slideBottomToTop: {
          "0%, 100%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "none",
          },
        },
        slideBottomToTopNavbar: {
          "0%, 100%": {
            transform: "translateY(10%)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
      animation: {
        lazyLoading: "lazyLoading",
        slideRightToLeft: "slideRightToLeft",
        slideBottomToTop: "slideBottomToTop",
        slideBottomToTopNavbar: "slideBottomToTopNavbar",
      },
    },
  },
  plugins: [],
};