const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const terserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js$|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        }
                    }
                ]
            },
        ]
    },
    optimization: {
		minimize: true,
		minimizer: [
            new CleanWebpackPlugin(),
            new CssMinimizerPlugin(),
			new terserPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminMinify,
                  options: {
                    plugins: [
                      ["gifsicle", { interlaced: true }],
                      ["mozjpeg", { progressive: true, optimizationLevel: 5}],
                      ["pngquant", { optimizationLevel: 5 }],
                      [ "svgo"],
                    ],
                  },
                },
              }),
              new ReactRefreshWebpackPlugin(),

		],
	},
    plugins: [
        new MiniCssExtractPlugin({
            filename: './style/main.css',
        }),
    ]
})