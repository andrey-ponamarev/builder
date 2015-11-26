module.exports = function (gulp, config) {
    var livereload = require('gulp-livereload');

    return gulp.src(config.htmlPath)
        .pipe(gulp.dest(config.prod));
};
