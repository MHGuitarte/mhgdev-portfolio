module.exports = {
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "warn",
  },
};
