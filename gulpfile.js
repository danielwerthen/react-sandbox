var gulp = require('gulp');
var jest = require('jest-cli');
var gulpJest = require('gulp-jest');
var jestConfig = require('./package.json').jest;

gulp.task('default', function () {
});

gulp.task('test', function (done) {
  return gulp.src('.')
    .pipe(gulpJest(jestConfig));
  /*jest.runCLI({ config: jestConfig }, ".", function () {
    done();
  });*/
});

gulp.task('tdd', function (done) {
  gulp.watch([ jestConfig.rootDir + "test-dist/**/*.js" ], [ 'test' ]);
});

var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var tap =  require('gulp-tap');

gulp.task('pack', function () {
return gulp.src('./src/**/__tests__/*.js')
  .pipe(named())
  .pipe(webpack({
    watch: true,
    target: "node",
    module: {
      loaders: [
        //{ test: /\.coffee$/, loader: 'coffee-loader' },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.js$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
      ]
    }
  }))
  .pipe(gulp.dest('./test-dist'))
  .pipe(tap(function (file, t) {
    console.log(file.path);
  }));
});
