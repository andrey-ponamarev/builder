var devFolder = './dev/';
var prodFolder = './prod/';
var config = {
        dev: devFolder,
        prod: prodFolder,
        htmlPath: devFolder + 'index.html',
        lessPath: devFolder + 'less/*.less',
        cssPath: prodFolder + 'css/',
        cssMin: 'style.min.css',
        serverOption: {
            root: 'prod',
            port: 8000,
            livereload: true
        }
    };

module.exports = config;
