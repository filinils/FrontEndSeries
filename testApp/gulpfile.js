var gulp = require('gulp');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var sass = require('gulp-sass');

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('app/**/*.js').on('change', browserSync.reload);
  gulp.watch('app/**/*.js', ['index']);
});

gulp.task('index', function () {
  var target = gulp.src('index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['styles/css/**/*.css','app/**/*.js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});
