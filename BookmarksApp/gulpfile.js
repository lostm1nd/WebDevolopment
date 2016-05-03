var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngTemplates = require('gulp-ng-templates');
var processhtml = require('gulp-processhtml');

gulp.task('js', function () {
  return gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('templates', function () {
  return gulp.src('src/directives/**/*.html')
    .pipe(ngTemplates({
      filename: 'templates.min.js',
      standalone: false,
      module: 'bookmarks',
      path: function (path, base) {
        return 'directives/' + path.replace(base, '');
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(processhtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['js', 'templates', 'html']);
