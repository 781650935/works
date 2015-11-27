var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    del = require('del');

var $ = require('gulp-load-plugins')();

//less编译任务
gulp.task('less', function () {
    return gulp.src('src/less/*')
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('src/css'));
});
//JS检测任务
gulp.task('jshint', function () {
    return gulp.src('src/js/*')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});
//监听文件变化
gulp.task('watch', function () {
    gulp.watch(['src/less/*'], ['less', 'reload']);
    gulp.watch(['src/js/*'], ['jshint', 'reload']);
    gulp.watch(['src/*.html'], ['reload']);
});
//页面监听
gulp.task('connect', function () {
    $.connect.server({
        root: 'src',
        livereload: true
    });
});
//刷新首页
gulp.task('reload', function () {
    gulp.src('src/index.html')
        .pipe($.connect.reload());
});
//正式构建
gulp.task('dev', function (done) {
    runSequence(
        ['less'],
        done);
});
//listen web app
gulp.task('default', ['connect', 'watch']);
