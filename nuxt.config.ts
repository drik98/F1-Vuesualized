import ElementPlus from 'unplugin-element-plus/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   meta: {
      title: 'F1 Vuesualized',
      meta: [
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: 'F1 Statistics visualized using vue and the ergast API',
         },
      ],
   },

   css: ['~/assets/scss/index.scss'],

   nitro: {
      preset: 'netlify'
   },

   build: {
      transpile: ['element-plus/es'],
   },

   typescript: {
      strict: true,
      shim: false,
   },

   vite: {
      plugins: [ElementPlus()],
   },

   // build modules
   modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt'],

   // auto import components
   components: true,

   // vueuse
   vueuse: {
      ssrHandlers: true,
   },

   unocss: {
      uno: true,
      attributify: true,
      icons: {
         scale: 1.2,
      },
   },
})
