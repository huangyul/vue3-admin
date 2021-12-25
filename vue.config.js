// vue 项目配置文件
// 详细请查看 https://cli.vuejs.org/zh/config/

const path = require('path')
const { config } = require('process')

module.exports = {
  // 部署应用包时的基本url
  // 比如要该应用要部署到 www.xxx.com/my-app/ 上，则publicPath需要设置为 /my-app
  // 这里先不设置
  // publicPath: ''

  // 输出的文件目录，也就是打包好后的文件目录，默认值 'dist'
  outputDir: 'dist',

  // 放置生成静态资源（js，img，css，font）的目录（在outputDir指定目录里面的），默认值 ''
  assetsDir: 'static',

  // 生产环境的source map ，默认值 true
  // productionSourceMap: false,

  // 是否将组件中的css提取到一个独立的css文件中
  css: {
    extract: false,
  },

  // 开发服务器
  // 更多参数可参考 webpack-dev-server https://webpack.docschina.org/configuration/dev-server/
  devServer: {
    // 指定使用的host
    port: 8888,
    // 是否自动使用浏览器打开
    open: false,
    // 代理（解决跨域问题）
    // proxy: {
    //   '/dev-api': {
    //     target: '', // 目标服务器
    //     pathRewrite: { '^/api': '' }, // 接口重写
    //     changeOrigin: true, // 发送请求头中的host会设置成target
    //     // ws: true, // 是否要代理websockets
    //   },
    // },
  },

  // webpack的配置，会通过webpack-merge合并到最终的配置中
  configureWebpack: {
    // 模块解析规则
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@views': path.resolve(__dirname, './src/views'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@components': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
    },
  },

  // 链式配置webpack，config相当于webpack Config导出的对象
  chainWebpack(config) {
    // 因为webpack默认使用url-loader处理，所以需要先排除掉
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, './src/assets/icons'))
      .end()

    // 新增一个rule，使用svg-sprite-loader来处理
    config.module
      .rule('icons') // 定义rule名
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
