var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var compass = require('gulp-compass');

gulp.task('sass', function(){
  return gulp.src('wp-content/themes/cooking/assets/scss/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('wp-content/themes/cooking/css'))
});

gulp.task('default', ['sass']);