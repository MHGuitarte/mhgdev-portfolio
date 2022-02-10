module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#003543",
        secondary: "#145866",
        accent: "#06852D",
      },
      fontSize: {
        "base-h1": "110px",
        "base-h2": "68px",
        "base-h3": "42px",
        "base-h4": "26px",
        "base-h5": "16px",
        "base-h6": "10px",
        "base-text": "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
