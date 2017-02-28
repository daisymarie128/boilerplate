var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	inject: 'body',
	template: __dirname + "/app/index.html",
	output: 'index.html'
});

module.exports = {
	entry: [
		'./app/index.js', './app/main.scss'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};
