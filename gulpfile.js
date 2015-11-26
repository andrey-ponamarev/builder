var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('./tasks/config');

gulp.task('less', function () {
    require('./tasks/less')(gulp, config)
        .pipe(connect.reload());
});

gulp.task('html', function () {
    require('./tasks/html')(gulp, config)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(config.lessPath, ['less']);
    gulp.watch(config.htmlPath, ['html']);
});

gulp.task('connect', function(){
    connect.server(config.serverOption);
});

gulp.task('default', ['less', 'html', 'watch', 'connect']);