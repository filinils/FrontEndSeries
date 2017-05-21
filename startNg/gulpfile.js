var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', function() {
  console.log('Gulp is running');
});

var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
gulp.task('sass', function () {
  return gulp.src('./css/sass/main.scss')
 .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(['./css/sass/**/*.scss','./app/**/*.scss'], ['sass']);
});