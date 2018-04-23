const path = require('path');

module.exports = {
	entry: "./src/js/main.js",
	mode:"development",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};