const CURRENT_VERSION = 1;

//npm install gulp gulp-babel babel-core gulp-uglify gulp-concat gulp-htmlmin gulp-rename babel-preset-es2015 --save-dev

const gulp = require('gulp'),
  babel = require('gulp-babel'),
  es2015 = require('babel-preset-es2015'),
  babelCore = require('babel-core'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  htmlmin = require('gulp-htmlmin'),
  rename = require('gulp-rename');

//tasks
gulp.task('scripts', () => {
  console.log('scripts ran');
  gulp.src(['src/v' + CURRENT_VERSION + '/scripts/*.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
  gulp.src('src/v' + CURRENT_VERSION + '/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

//watch tasks
gulp.task('build', () => {
  gulp.watch('src/v' + CURRENT_VERSION + '/scripts/*.js', ['scripts', 'html']);
});

//default tasks
gulp.task('default', ['build']);
