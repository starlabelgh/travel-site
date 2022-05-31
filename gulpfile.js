var gulp = require('gulp');
var watch = require('gulp-watch');

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
    console.log("Imagine Sass or PostCSS task running here");
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

