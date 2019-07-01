module.exports = {
  //   css: {
  //     loaderOptions: {
  //       stylus: {
  //         "resolve url": true,
  //         import: ["./src/theme"]
  //       }
  //     }
  //   },
  //   pluginOptions: {
  //     "cube-ui": {
  //       postCompile: true,
  //       theme: true
  //     }
  //   },
  publicPath: "/",
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8086,
    https: false,
    disableHostCheck: true, // 关闭host check，方便使用ngrok之类的内网转发工具
    hotOnly: false
  }
};
