const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const terserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        // clean: true,
        assetModuleFilename: './image/[name][ext]'
    },
    cache: false,
    module: {
        rules: [
            // style and css loader
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                     'sass-loader'
                ]
            },
            {
				test: /\.(svg|png|jpg|jpeg|webp)$/,
                type: 'asset',
			},
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify:  {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: './style/main.css',
        }),
    ]
}