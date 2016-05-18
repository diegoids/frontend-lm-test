var gulp      = require('gulp');
var sass      = require('gulp-sass');

var assetsPath = './app/assets';
var sassPath   = assetsPath + '/sass';
var distPath   = assetsPath + '/dist';

gulp.task('default', function() {
  console.log('works!');
});

/*
** COMPILE SASS
*/
gulp.task('sass', function () {
  gulp.src(sassPath + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distPath+'/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sassPath + '/**/*.scss', ['sass']);
});