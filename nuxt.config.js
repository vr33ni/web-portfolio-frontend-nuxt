export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vr33ni",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/axios-accessor.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    [
      "@nuxtjs/dotenv",
      { filename: `.env.${process.env.buildMode || "LOCAL"}` }
    ],
    // '@nuxtjs/composition-api'
    "@nuxtjs/composition-api/module",
    "@nuxtjs/fontawesome"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],

  // https://bootstrap-vue.org/docs/reference/settings#default-bootstrapvue-configuration
  bootstrapVue: {
    componentPlugins: [
      "NavbarPlugin",
      "Collapse",
      "Dropdown",
      "ModalPlugin",
      "ToastPlugin"
    ],
    components: [
      "BIcon",
      "BIconPlusCircle",
      "BIconDashCircle",
      "BSidebar",
      "BButton",
      "BPopover",
      "BListGroup",
      "BListGroupItem",
      "BImg",
      "BFormCheckbox",
      "BTooltip",
      "BFormRadioGroup",
      "BModal",
      "BFormGroup",
      "BFormInput",
      "BIconExclamationCircle",
      "BPagination",
      "BCard",
      "BCardText",
      "BCardGroup",
      "BIconArrowCounterclockwise"
    ] // reduces production bundle size if not loading the full icons library
    // icons: true, // Install the IconsPlugin
  },

  fontawesome: {
    // only import icons that are actually used
    icons: {
      solid: true,
      regular: true,
      brands: true,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
