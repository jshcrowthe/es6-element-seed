var gulp = require('gulp');
var babel = require('gulp-babel');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');

gulp.task('transpile', function() {
  return gulp.src('./src/**/*.es6.js')
            .pipe(babel())
            .pipe(gulp.dest('./dist'))
            .pipe(notify({
              title: 'Task: `transpile`',
              message: 'Babel transiplation succeded'
            }))
            .on('error', notify.onError(function (error) {
              return "ERROR in task: `transpile` - " + error.message;
            }));
});
 
gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
      directoryListing: true,
      open: './index.html',
      port: 5000
    }));
});

gulp.task('default', ['transpile', 'webserver'], function() {
  gulp.watch('./src/**/*', ['transpile']);
});