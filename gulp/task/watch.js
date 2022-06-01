const { watch } = require('browser-sync');
var gulp = require('gulp')
watch = require('gulp-watch');
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