const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8008
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
}
