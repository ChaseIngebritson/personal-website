const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = []
if (process.env.NODE_ENV === 'development') plugins.push(new BundleAnalyzerPlugin())

module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Chase Ingebritson',
    },
  },
  configureWebpack: {
    plugins
  }
}