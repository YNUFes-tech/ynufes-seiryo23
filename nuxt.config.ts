// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/style/reset.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Konkhmer Sleokchher": {
            wght: [400, 500, 600, 700],
          },
          "Noto Sans JP": {
            wght: [400, 500, 600, 700],
          },
        },
        download: true,
      },
    ],
  ],
  app: {
    head: {
      htmlAttrs: {},
      meta: [
        { property: "og:type", content: "website" },
        {
          property: "og:site_name",
          content: "清陵祭2023 - 横浜国立大学大学祭",
        },
        // { property: "og:image", content: "<ogpに使われる画像の絶対パス>" }
        {
          property: "keywords",
          content: "清陵祭,横浜国立大学,大学祭,文化祭,清涼祭",
        },
      ],
    },
  },
});
