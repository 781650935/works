var config = {
    entry: {
        app: ['./src/bootstrap.js'],
    },
    output: {
        path: __dirname + '/build/js',
        filename: 'bundle.js',
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
    devtool: 'source-map'
};

module.exports = config;
