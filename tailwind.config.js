module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1830px",
    },
    extend: {
      fontSize: {
        "8xl": "5.25rem", // 84px
        "9xl": "8rem", // 128px
      },
      colors: {
        dark: {
          DEFAULT: "#161519",
        },
        darker: {
          DEFAULT: "#0D0D0E",
        },
        light: {
          DEFAULT: "#EEEAEA",
        },
        muted: {
          DEFAULT: "#33333E",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  // plugins: [require("@tailwindcss/typography")],
};
