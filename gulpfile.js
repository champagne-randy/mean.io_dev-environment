// modules =======================================================================
var gulp		= require('gulp');				
var jshint		= require('gulp-jshint');		// js linting
var stylish 	= require('jshint-stylish');	// js lint reporter
var csslint 	= require('gulp-csslint');		// css linting
var scsslint 	= require('gulp-scss-lint');	// sass linting
var livereload 	= require('gulp-livereload');
var nodemon 	= require('gulp-nodemon');		
var path 		= require('path');



// build config =================================================================
/*
	ToDo:
	- add the various paths
*/
paths = {
	js: 	['./client/app/**/*.js', '!client/app/styles/**'],
	html: 	[],
	css: 	[],
	sass: 	['./client/app/styles/*.scss']
};



// linting tasks =================================================================
// js
/*
	ToDo:
	- update directories
*/
gulp.task('lint-js', function() {
	return gulp.src( paths.js )
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(livereload());					// refreshes browser after build
});



// css 
/*
	ToDo:
	- decide if I actually need this. Since I am using sass, I don't plan on writing css
	- but I might end up using 3rd party libraries i.e. polyfills
*/
// gulp.task('lint-css', function() {
// 	return gulp.src('./public/css/**/*.css')
// 		.pipe(csslint())
// 		.pipe(csslint.reporter());
// });



// sass
/*
	ToDo:
	- implement SASS linting task

	Dependencies:
	- I prolly should wait until I define a SASS dir structure
*/
gulp.task('lint-sass', function() {
	return gulp.src( paths.sass )
    	.pipe(scsslint())
    	.pipe(livereload());
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



// build tasks ===================================================================
// Sass
/*

*/





// minify CSS
/*
	ToDo:
	- update directory structures
*/
gulp.task('process-styles', function() {
	return sass('./src/styles/main.scss', {style: 'expanded'})
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('./dest/styles/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./dest/styles/'));
});



// watch & livereload tasks ======================================================
/*
	ToDo:
	- abstract watched dir path, get it from config file
	- add additional folders to watch i.e. css, scss, html
	- update directory structures
*/
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch( paths.js, ['lint-js'] );
	gulp.watch( paths.sass, ['lint-sass'] );
	gulp.watch( './src/styles/*.scss', ['process-styles'] );
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







