var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'); 
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

// Gulp update from stackoverflow code begin
var gulp = require('gulp'),
    watch = require('gulp-watch');
    //watchLess = require('gulp-watch-less'),
    //pug = require('gulp-pug'),
    //less = require('gulp-less'),
    //minifyCSS = require('gulp-csso'),
    //concat = require('gulp-concat'),
    //sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function () {
    gulp.watch('./app/temp/styles.css', ['css']);
});

gulp.task('html', function(){
    return gulp.src('./app/index.html')
    .pipe(pug())
    .pipe(gulp.dest('./app/temp/html'))
});

gulp.task('css', function(){
return gulp.src('./app/assets/styles/styles.css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('js', function(){
    return gulp.src('./app/assets/styles/.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/temp/js'))
});

gulp.task('default', [ 'html', 'js', 'css', 'watch']);
// Gulp update from stackoverflow code end

gulp.task('default', function(){
    return gulp.src('package.json')
     console.log("Hooray - gulp task created");
});

gulp.task('html', function(){
    return gulp.src('package.json')
    console.log("Just a gulp html test");
});

gulp.task('styles', function(){
    return gulp.src('package.json')
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    return gulp.src('package.json')

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
})

gulp.task('cssInject', ['styles'], function(){
    gulp.src('.app/temp/styles/styles.css')
    pipe(browserSync.stream());
});

