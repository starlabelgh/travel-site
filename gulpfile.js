var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'); 
var nested = require('postcss-nested');
var cssImport = require('postcss-import')


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
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
})

