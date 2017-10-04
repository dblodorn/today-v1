var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    clean       = require('gulp-clean'),
    fs          = require('fs'),
    runSequence = require('run-sequence'),
    pickImages  = require('./js/server/pick-images'),
    config      = require('./config.json');

gulp.task('pluck', function(){
  gulp.imgList = pickImages(config.imgs.start);
});

gulp.task('move-five', function(){
  gulp.src(gulp.imgList, { base: config.imgs.start })
    .pipe(gulp.dest(config.imgs.used))
    .pipe(gulp.dest(config.imgs.display))
});

gulp.task('clean-current', function () {
  return gulp.src(config.imgs.display + '/*')
    .pipe(clean({force: true}));
});

gulp.task('clean-plucked', function () {
  setTimeout(function() {
    return gulp.src(gulp.imgList)
      .pipe(clean({force: true}));
  }, 100);
});

gulp.task('image-pick', function(cb) {
  runSequence(
    'clean-current',
    'pluck',
    'move-five',
    'clean-plucked',
    cb);
});
