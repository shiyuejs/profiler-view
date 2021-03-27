const { resolve } = require("path");
module.exports = {
  mode: "universal",
  /*
   ** 页面头信息
   */
  head: {
    title: "监控系统",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "性能分析、错误监控"
      },
      {
        hid: "description",
        name: "description",
        content: "全方面监控"
      }
    ],
    // script: [
    // 	{ src: '' }
    // ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
      // { rel: 'stylesheet', type: "text/css", href: '/element-ui/index.css' },
      // { rel: 'stylesheet', type: "text/css", href: '/viewer/index.css' }
    ]
  },
  /*
   ** 自定义加载条的样式
   */
  loading: {
    color: "#fff",
    height: "4px"
  },
  /*
   ** 全局 CSS
   */
  css: ["@/style/recover.scss"],
  /*
   ** 在安装app之前，加载插件
   */
  plugins: [
    {
      src: "@/plugins/element-ui",
      ssr: true
    },
    {
      src: "@/plugins/main",
      ssr: true
    },
    {
      src: "@/plugins/svgIcon",
      ssr: true
    },
    {
      src: "~plugins/axios/client/install",
      ssr: false
    },
    {
      src: "~plugins/axios/fetch",
      ssr: false
    }
  ],

  // axios: {
  //   proxy: true,
  //   prefix: '/api',
  //   credentials: true,
  // },
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:7304/api',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '/', //将 /api 替换掉
  //     },
  //   },
  // },

  // 路由鉴权, 主要针对main路由
  router: {
    middleware: "auth"
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/axios"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /**
   * Build configuration
   * https://zh.nuxtjs.org/api/configuration-build/
   */
  build: {
    analyze: false,

    // .nuxt/dist/client/** 文件上传到cdn目录
    publicPath: "",
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[name].[chunkhash].js"),
      css: ({ isDev }) =>
        isDev ? "[name].css" : "css/[name].[contenthash].css",
      img: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "img/[name].[hash:7].[ext]",
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[hash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[hash:7].[ext]"
    },
    // optimization: {
    // 	splitChunks: {
    // 	  	chunks: "all",
    // 	},
    // },
    extractCSS: {
      allChunks: true
    },
    transpile: [/^element-ui/],
    build: {
      vendor: ["element-ui", "axios"]
    },
    babel: {},
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      let addSvgLoader = () => {
        const svgRule = config.module.rules.find(rule =>
          rule.test.test(".svg")
        );
        svgRule.exclude = [resolve(__dirname, "assets/svg-icon/svg")];

        config.module.rules.push({
          test: /\.svg$/,
          include: [resolve(__dirname, "assets/svg-icon/svg")],
          use: [
            {
              loader: "svg-sprite-loader",
              options: {
                symbolId: "icon-[name]"
              }
            }
          ]
        });
      };
      addSvgLoader();
    }
  }
};
