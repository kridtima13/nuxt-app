// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         title: 'Nuxt',
         meta: [
            { name: 'description', content: 'Everything about - Nuxt-3'}
         ],
         link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' }
         ],
         script: [
            { src: "/assets/js/core/popper.min.js" },
            { src: "/assets/js/core/bootstrap.min.js" },
            { src: "/assets/js/plugins/perfect-scrollbar.min.js" },
            { src: "/assets/js/plugins/smooth-scrollbar.min.js"},
            { src: "/assets/js/plugins/chartjs.min.js" }
         ]
      }
   },
   css: [
      "~/css/nucleo-icons.css",
      "~/css/nucleo-svg.css",
      "~/css/soft-ui-dashboard.css",
   ],
   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/axios
      // '@nuxtjs/axios',
   ],

})
