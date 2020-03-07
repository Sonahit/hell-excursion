const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const TerserPlugin = require("terser-webpack-plugin");

const prod = merge(base, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    moduleIds: "hashed",
    minimize: true,
    minimizer: [
      new TerserPlugin({
          parallel: true,
          test: /\.js(.*)?$/i,
          terserOptions: {
            ecma: 6,
            compress: true,
            // warnings: "verbose",
          },
          sourceMap: true
      })
    ],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  // Use with server
  // externals: {
	// 	//prettier-ignore
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// },
});

module.exports = prod;
