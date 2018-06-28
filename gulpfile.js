const gulp = require('gulp');
const connect = require('gulp-connect');
const port = process.env.PORT || 5000;
gulp.task('serveProject', function() {
    connect.server({
        root: 'dist/',
        port: port,
        livereload: false,
        fallback: 'dist/index.html'
    });
})
