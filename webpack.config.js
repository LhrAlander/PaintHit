const path = require('path')
module.exports = {
	entry: {
		startPage: './ts/startPage.ts',
		Canvas: './ts/Canvas.ts'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env']
				}
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
 };