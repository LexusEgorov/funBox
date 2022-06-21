const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app/main.js",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: "./src/public/index.html",
      }
    ),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader",]
      }
    ]
  },
}
