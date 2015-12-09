var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/app.js'],
        vendors: ['jquery', 'underscore']
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        root: __dirname + '/src/',
    },
    watch: true,
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.css$/, exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),//分离库
        new HtmlWebpackPlugin({
            title: '测试页面',
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body'
        })
    ]
};
