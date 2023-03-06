module.exports = {
    configureWebpack: {
        plugins: [
            require('unplugin-vue-components/webpack')({
                dts: true,
                extensions: ["vue"],
                dirs: ["./src/components", "./src/functional"],
                deep: true,

                resolvers: [
                    (componentName) => {
                        if (componentName.startsWith("Ion"))
                            return { name: componentName, from: "@ionic/vue" };
                    },
                    (componentName) => {
                        if (componentName.startsWith("Swiper"))
                            return { name: componentName, from: "swiper/vue" };
                    },
                ],
            }),

            require('unplugin-auto-import/webpack')({
                dts: true,
                dirs: ["./src/hooks/**", "./src/services/**", "./src/stores/**"],
                imports: ["vue", "vue-router", { vue: ["Ref"] }],

            }),
        ],
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableLegacy: false,
        runtimeOnly: false,
        compositionOnly: false,
        fullInstall: true
      }
    }
}
