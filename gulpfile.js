var less = require('gulp-less'),
	gulp = require('gulp'),
	path = require('path')
	;

gulp.task('default', ['less'], function(){
  // place code for your default task here
});

gulp.task('less', function () {
  gulp.src('build/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});