var gulp = require('gulp');
var webpack = require('webpack');

var $ = require('gulp-load-plugins')();

gulp.task('webpack', function() {
    return gulp.src('src/app.js')
        .pipe($.webpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('build/'));
});

//listen web app
gulp.task('default', ['webpack']);
