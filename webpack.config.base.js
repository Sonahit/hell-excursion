const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const path = require("path");
const BUILD_BASE = path.resolve(__dirname, "./dist");
const config = require("./src/config/app");


const baseConfig = {
	mode: "none",
	entry: {
		app: path.resolve(__dirname, "./src/index.tsx")
	},
	output: {
		filename: config.isProduction ? "[name].[hash].bundle.js" : "[name].bundle.js",
		path: BUILD_BASE
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@public": path.resolve(__dirname, "./public"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"~images": path.resolve(__dirname, "./src/assets/images"),
			"@sass": path.resolve(__dirname, "./src/assets/sass"),
			"@assets": path.resolve(__dirname, "./src/assets")
		}
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: `ts-loader`,
					// options: {
					// 	configFileName: path.resolve(__dirname, "./tsconfig.json"),
					// }
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: config.isProduction,
							reloadAll: true
						}
					},
					"css-loader",
					"sass-loader"
				]
			},
			{
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/assets/svg"),
				use: {
					loader: "file-loader",
					options: {
            name: "assets/svg/[name].[ext]",
					}
				}
      },
			{
				test: /\.(gif|png|jpeg|jpg|webp)$/i,
				include: path.resolve(__dirname, "./src/assets"),
				loader: "url-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: config.isProduction ? "index.prod.html" : "index.html",
			hash: config.isProduction,
			template: path.resolve(__dirname, "./public/index.html"),
			inject: true
		}),
		new MiniCssExtractPlugin({
			filename: config.isProduction ? `assets/css/[name].[hash].css` : `assets/css/[name].css`,
			chunkFilename: config.isProduction ? `assets/css/[id].[hash].css` : `assets/css/[id].css`,
			ignoreOrder: false
		}),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: 'assets/svg',
        context: 'src/',
        to: 'assets/svg/[name].[ext]'
      }
    ])
	]
};

module.exports = baseConfig;
