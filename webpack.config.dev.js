const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const WriteFilePlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');
const dev = merge(base, {
  mode: "development",
  devServer: {
    open: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map",
  plugins: [
    new WriteFilePlugin()
  ]
});

module.exports = dev;
