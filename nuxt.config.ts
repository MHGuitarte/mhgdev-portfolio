import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots"],
  robots: {
    UserAgent: "*",
    Disallow: "/admin",
    Allow: "/",
  },
  head: {
    title: "mhgdev - mi espacio personal",
    htmlAttrs: {
      lang: "es",
    },
  },
});
