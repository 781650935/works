var config = {
    entry: {
        app: ['./src/app.js'],
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
                loader: 'babel'
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = config;
