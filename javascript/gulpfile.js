// grab our gulp packages
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');


// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('concat', function() {
    console.log('hello J');
    return gulp.src('app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() { //Sass to CSS to separate files
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
})

gulp.task('concatCss', function() { //Sass to CSS to same css file
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('css1.css'))
        .pipe(gulp.dest('app/css'))
})


gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('app/**/*.js').on('change', browserSync.reload);
  gulp.watch('app/**/*.js', ['index']);
  gulp.watch('app/**/*.css').on('change', browserSync.reload);
  gulp.watch('app/**/*.css', ['index']);
});


gulp.task('index', function() {
    var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
     // var sources = gulp.src(['app/**/*.js'], { read: false });
	  var sources = gulp.src(['app/**/*.css','app/**/*.js'], { read: false });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});