var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('es6-dev', function() {
  return gulp.src([
    '!src/js/*js',
    'src/js/**/*.js', 'src/js/**/**/*.js',
  ])
  .pipe(babel({ modules: 'amd', experimental: true }))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('es6-prod', function() {
  return gulp.src([
    'src/js/**/*.js', 'src/js/**/**/*.js',
    '!src/js/*.js'
  ])
  .pipe(babel({ modules: 'amd', experimental: true  }))
  .pipe(uglify({
    compress: {
      pure_funcs: [ 'console.log', 'console.debug' ]
    }
  }))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function() {
  gulp.src([
   'src/index.html', 'src/css/main.css'
  ], { base: 'src' })
  .pipe(gulp.dest('dist'));
});

gulp.task('run', function() {
  gulp.src(['src/js/*.js'])
  .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['es6-dev', 'copy', 'run']);
gulp.task('prod', ['es6-prod', 'copy', 'run']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});
