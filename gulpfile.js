require('./gulp/task/styles')
require('./gulp/task/watch')






// var browserSync = require('browser-sync').create();

// // Gulp update from stackoverflow code begin
// var gulp = require('gulp'),
//     watch = require('gulp-watch');
//     //watchLess = require('gulp-watch-less'),
//     //pug = require('gulp-pug'),
//     //less = require('gulp-less'),
//     //minifyCSS = require('gulp-csso'),
//     //concat = require('gulp-concat'),
//     //sourcemaps = require('gulp-sourcemaps');

// gulp.task('watch', function () {
//     gulp.watch('./app/temp/styles.css', ['css']);
// });

// gulp.task('html', function(){
//     return gulp.src('./app/index.html')
//     .pipe(pug())
//     .pipe(gulp.dest('./app/temp/html'))
// });

// gulp.task('css', function(){
// return gulp.src('./app/assets/styles/styles.css')
//     .pipe(less())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('./app/temp/styles'))
// });

// gulp.task('js', function(){
//     return gulp.src('./app/assets/styles/.js')
//     .pipe(sourcemaps.init())
//     .pipe(concat('app.min.js'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./app/temp/js'))
// });

// gulp.task('default', [ 'html', 'js', 'css', 'watch']);
// // Gulp update from stackoverflow code end





