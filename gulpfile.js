// modules =======================================================================
var gulp		= require('gulp');				
var jshint		= require('gulp-jshint');		// js linting
var stylish 	= require('jshint-stylish');	// js lint reporter
var csslint 	= require('gulp-csslint');		// css linting
var livereload 	= require('gulp-livereload');
var nodemon 	= require('gulp-nodemon');		



// linting tasks =================================================================
// js
gulp.task('lint-js', function() {
	return gulp.src('./public/js/**/*')
		.pipe(jshint())
		//.pipe(jshint.reporter('default'));
		.pipe(jshint.reporter(stylish))
		.pipe(livereload());					// refreshes browser after build
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



// watch & livereload tasks ======================================================
/*
	ToDo:
	- abstract watched dir path, get it from config file
	- add additional folders to watch i.e. css, scss, html
*/
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./public/js/**/*', ['lint-js']);
});






// develop tasks =================================================================
/*
	ToDo:
	- this is the begining of the dev task
	- I will use this to launch grunt for dev work
	- once completed, will use it as a model for prod and test tasks
	https://www.npmjs.com/package/gulp-nodemon
*/ 
/*
gulp.task('develop', function () {
  nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          , tasks: ['lint'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})
*/







