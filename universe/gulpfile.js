let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('default', () => {
  return gulp.src(['scss/**/*.scss'])
    .pipe(sass({outputStyle: 'expended'}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', () => {
  gulp.watch('scss/*.scss', ['default']);
});
