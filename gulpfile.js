var gulp	= require('gulp');


// js linting ===============================================
var jshint	= require('gulp-jshint');
var stylish = require('jshint-stylish');
gulp.task('lint-js', function() {
	return gulp.src('./public/js/**/*')
		.pipe(jshint())
		//.pipe(jshint.reporter('default'));
		.pipe(jshint.reporter(stylish));
});



// css linting ==============================================
var csslint = require('gulp-csslint');
gulp.task('lint-css', function() {
	return gulp.src('./public/css/**/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});



// html linting =============================================
/*
	Note:
	- still need to find an html linting solution
	- needs to accept angular attributes
*/
/*
var htmlLinter	= require('gulp-htmllint');
gulp.task('lint-html', function() {
	return gulp.src('./public/views/index.html')
		.pipe(htmlLinter());
});
*/

