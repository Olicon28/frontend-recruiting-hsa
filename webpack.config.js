const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractplugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/js/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules : [
            {
                test: /\.m?js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.s[ac]ss$/i,
                use: [miniCssExtractplugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: './index.html',
            filename: './index.html'
        }),
        new miniCssExtractplugin({
            filename: '[name].[contenthash].css'
        })
    ]
}