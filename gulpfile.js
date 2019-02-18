var gulp = require('gulp');
var scss = require('gulp-sass')
var server = require('gulp-webserver')
var css = require('gulp-clean-css')
var js = require('gulp-uglify')
var concat = require('gulp-concat')


gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(css())
        .pipe(gulp.dest('./src/css/'))
})

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
    gulp.watch('./src/js/*.js', gulp.series('js'))
})


gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(js())
        .pipe(gulp.dest('./src/js/'))
})

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            open: true,
            port: 9090,
            livereload: true
        }))
})

gulp.task('default', gulp.series('server', 'scss', 'js', 'watch'))
gulp.task('build', function() {
    return gulp.src('./src/js/*.js', './src/js/*.js')
        .pipe(gulp.dest('./src/dist/'))
})