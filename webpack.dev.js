const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    target: 'web',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        compress : true,
    },
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
                            plugins: ["react-refresh/babel"],
                        }
                    }
                ]
            },
        ]
        },
        plugins: [
            new ReactRefreshWebpackPlugin(),
        ],
})