const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Chase Ingebritson',
    },
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
}