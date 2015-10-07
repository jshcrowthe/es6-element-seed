var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('transpile', function() {
  return gulp.src('./src/**/*.es6.js')
            .pipe(babel())
            .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.watch('./src/**/*', ['transpile']);
});