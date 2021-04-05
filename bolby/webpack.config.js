'use strict';

let path = require('path');
const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  // watch: true,

  devtool: "source-map",

  module: {
		rules: [{
			test:/.(s*)css$/,
			use: [
				miniCss.loader,
				'css-loader',
				'sass-loader',
			]
		}]
	},
	optimization: {
		minimizer: [
			new minify({})
		],
	},
	plugins: [
		new miniCss({
			filename: '../style.css',
		}),
	]
};
