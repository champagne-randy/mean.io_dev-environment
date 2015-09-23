// modules ==================================================
var gulp	= require('gulp');
// js linting
var jshint	= require('gulp-jshint');
var stylish = require('jshint-stylish');
// css linting
var csslint = require('gulp-csslint');
// livereload
var livereload = require('gulp-livereload');



// linting tasks ============================================
// js
gulp.task('lint-js', function() {
	return gulp.src('./public/js/**/*')
		.pipe(jshint())
		//.pipe(jshint.reporter('default'));
		.pipe(jshint.reporter(stylish));
});



// css 
gulp.task('lint-css', function() {
	return gulp.src('./public/css/**/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});



/*
	ToDo:
	- implement SASS linting task

	Dependencies:
	- I prolly should wait until I define a SASS dir structure
*/
// sass
gulp.task('lint-sass', function() {
	return {};
})



// html
/*
	ToDo:
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



// watch & livereload tasks =================================
/*
	ToDo:
	- abstract watched dir path, get it from config file
	- add additional folders to watch i.e. css, scss, html
*/
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./public/js/**/*', ['lint-js']);
});







