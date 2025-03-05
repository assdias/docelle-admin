export default {
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'pt-BR', iso: 'pt-BR', file: 'ptBR.json' },
    ],
    defaultLocale: 'pt-BR',
    lazy: true,
    langDir: 'src/i18n/translations/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
}