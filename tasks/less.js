var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

module.exports = function (gulp, config) {
    return gulp.src(config.lessPath)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat(config.cssMin))
        .pipe(gulp.dest(config.cssPath));
};
