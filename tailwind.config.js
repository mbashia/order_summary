/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        red_hat: ["Red Hat Display"],
      },
      fontWeight: {
        extra_light: 200,
        regular: 500,
        light: 400,
        bold: 700,
        extra_bold: 800,
      },
      backgroundImage: {
        "bottom-pattern":
          "url('/public/images/pattern-background-desktop.svg')",
        illustration: "url('/public/images/illustration-hero.svg')",
      },
    },
  },
  plugins: [],
};
