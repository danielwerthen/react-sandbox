var gulp = require('gulp');
var jest = require('jest-cli');
var jestConfig = require('./package.json').jest;

gulp.task('default', function () {
});

gulp.task('test', function (done) {
  jest.runCLI({ config: jestConfig }, ".", function () {
    done();
  });
});

gulp.task('tdd', function (done) {
  gulp.watch([ jestConfig.rootDir + "/**/*.js" ], [ 'test' ]);
});

var jsx = require('gulp-jsx');
var rename = require('gulp-rename');

gulp.task('run', function () {
  return gulp.src('./*.js')
    .pipe(jsx())
    .pipe(rename(function (path) {
      path.basename = "__" + path.basename;
    }))
    .pipe(gulp.dest('./'));
});
