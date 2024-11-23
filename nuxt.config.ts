// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/eslint",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          name: "montserrat",
          provider: "google",
        },
      },
    ],
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
  ],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_vars.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
          `
        }
      },
    },
  },
});
