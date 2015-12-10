var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/app.js'],
        vendors: ['angular', 'angular-ui-router', 'oclazyload']
    },
    output: {
        path: __dirname + '/build/js',
        filename: 'bundle.js',
        chunkFilename: "[id].chunk.js",
        publicPath: '/js/'
    },
    resolve: {
        root: __dirname + '/src/',
    },
    watch: true,
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'ng-annotate!babel'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')//分离库
    ]
};
