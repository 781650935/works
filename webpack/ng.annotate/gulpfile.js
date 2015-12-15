var gulp = require('gulp');
var webpack = require('webpack');

var $ = require('gulp-load-plugins')();

var PATH = {
    'JS': ['src/*.js', 'src/**/*.js', 'src/**/**/*.js', 'src/**/**/**/*.js']
};
//JS检测任务
gulp.task('jshint', function () {
    return gulp.src(PATH.JS)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('webpack', function() {
    return gulp.src('src/bootstrap.js')
        .pipe($.webpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('build/js/'));
});

//监听文件变化
gulp.task('watch', function () {
    gulp.watch(PATH.JS, ['jshint']);
});

//listen web app
gulp.task('default', ['webpack']);
