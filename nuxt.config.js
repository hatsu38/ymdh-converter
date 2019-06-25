
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'YMDH変換器',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YMDH変換器は、年-月-日-時-分-秒を簡単に変換できるサービスです' },
      { name: "msapplication-square70x70logo", content: "/site-tile-70x70.png" },
      { name: "msapplication-square150x150logo", content: "/site-tile-150x150.png" },
      { name: "msapplication-wide310x150logo", content: "/site-tile-310x150.png" },
      { name: "msapplication-square310x310logo", content: "/site-tile-310x310.png" },
      { name: "msapplication-TileColor", content: "#0078d7" },
      { property: "og:url", content: "https://ymdh-converter.web.app/" },
      { property: "og:type", content: " website" },
      { property: "og:title", content: "YMDH変換器" },
      { property: "og:description", content: "YMDH変換器は、年-月-日-時-分-秒を簡単に変換できるサービスです" },
      { property: "og:site_name", content: "YMDH変換器" },
      { property: "og:image", content: "https://ymdh-converter.web.app/ogp_img.png" },
      { name: "twitter:card", content: "summary_large_image"}
    ],
    link: [
      { href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css", rel: "stylesheet"},
      { rel: "shortcut icon", type: "image/vnd.microsoft.icon", href: "favicons/favicon.ico" },
      { rel: "icon", type: "image/vnd.microsoft.icon", href: "favicons/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "57x57", href: "favicons/apple-touch-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "favicons/apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "favicons/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "favicons/apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "favicons/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "favicons/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "favicons/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "favicons/apple-touch-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "favicons/apple-touch-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "36x36", href: "favicons/android-chrome-36x36.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "favicons/android-chrome-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "72x72", href: "favicons/android-chrome-72x72.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "favicons/android-chrome-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "128x128", href: "favicons/android-chrome-128x128.png" },
      { rel: "icon", type: "image/png", sizes: "144x144", href: "favicons/android-chrome-144x144.png" },
      { rel: "icon", type: "image/png", sizes: "152x152", href: "favicons/android-chrome-152x152.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "favicons/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "256x256", href: "favicons/android-chrome-256x256.png" },
      { rel: "icon", type: "image/png", sizes: "384x384", href: "favicons/android-chrome-384x384.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "favicons/android-chrome-512x512.png" },
      { rel: "icon", type: "image/png", sizes: "36x36", href: "favicons/icon-36x36.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "favicons/icon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "72x72", href: "favicons/icon-72x72.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "favicons/icon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "128x128", href: "favicons/icon-128x128.png" },
      { rel: "icon", type: "image/png", sizes: "144x144", href: "favicons/icon-144x144.png" },
      { rel: "icon", type: "image/png", sizes: "152x152", href: "favicons/icon-152x152.png" },
      { rel: "icon", type: "image/png", sizes: "160x160", href: "favicons/icon-160x160.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "favicons/icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "196x196", href: "favicons/icon-196x196.png" },
      { rel: "icon", type: "image/png", sizes: "256x256", href: "favicons/icon-256x256.png" },
      { rel: "icon", type: "image/png", sizes: "384x384", href: "favicons/icon-384x384.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "favicons/icon-512x512.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "favicons/icon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "24x24", href: "favicons/icon-24x24.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "favicons/icon-32x32.png" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
