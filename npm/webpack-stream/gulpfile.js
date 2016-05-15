/**
 * Created by Rayr Lee on 2015/11/19.
 */

var gulp = require('gulp');
var webpack = require('webpack-stream');

var options = {
    watch: true,
    module: {
        loaders: [{test: /\.js$/, exclude: /node_modules/, loaders: ['traceur-loader']}]
    },
    output: {filename: 'index.module.js'}
};

gulp.task('default', function () {
    return gulp.src('src/js/index.js')
        .pipe(webpack(options, null))
        .pipe(gulp.dest('dist/js'));
});