import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots", "@vueuse/nuxt"],
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
  components: true,
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [IconsResolver({})],
      }),
    ],
  },
  vueuse: {
    ssrHandlers: true,
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
})
