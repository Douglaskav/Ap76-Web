module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logo_color: {
          400: "#616161",
          500: "#333333",
        },

        primary: {
          300: "#2AF580",
          500: "#2ECC71",
          700: "#44AB70",
        },

        secondary: {
          300: "#FF902E",
          500: "#E67E22",
          700: "#C25F08",
        },

        desc: {
          300: "#888888",
          500: "#555555",
          700: "#AAAAAA",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        body: ['"Rubik"']
      },
    },
  },
  plugins: [],
};
