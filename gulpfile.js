// modules =======================================================================
/*
	ToDo:
	- consider mving this to app.config as gulp.plugins
*/
var gulp			= require('gulp');				
var jshint			= require('gulp-jshint');		// js linting
var stylish 		= require('jshint-stylish');	// js lint reporter
var csslint 		= require('gulp-csslint');		// css linting
var scsslint 		= require('gulp-scss-lint');	// sass linting
var sass 			= require('gulp-ruby-sass');	// sass processing
var livereload 		= require('gulp-livereload');
var nodemon 		= require('gulp-nodemon');		
var path 			= require('path');
var autoprefixer 	= require('gulp-autoprefixer');	// used to add browser specific prefixes to css code
var minifycss 		= require('gulp-minify-css');	// used to minify css files
var rename 			= require('gulp-rename');		// used to change the name of the ouput file (add .min)
var concat 			= require('gulp-concat');		// used to concatenate multiple files into one
var uglify 			= require('gulp-uglify');		// used to obfuscate code
var flatten 		= require('gulp-flatten');		// used to flatten directory structure on output
var clean 			= require('gulp-clean');		// used to clear public directory before build
var imagemin 		= require('gulp-imagemin');		// used to reduce image sizes




// build config =================================================================
/*
	ToDo:
	- consider moving this to app.config as gulp.paths
	- add support for incremental builds. Only re-process files that have changed
		https://github.com/gulpjs/gulp
*/
paths = {
	js: 		['./client/app/**/*.js', '!client/app/styles/**'],
	html: 		['./client/app/**/*.html', '!client/app/styles/**'],
	sass: 		['./client/app/styles/**/*.scss', './client/app/styles/main.scss', '!client/app/styles/vendors/**'],
	images: 	['./client/app/images/**/*'],
	jsOut: 		'./client/public/js/',
	htmlOut: 	'./client/public/views/',
	cssOut: 	'./client/public/css/',
	imgOut: 	'./client/public/img/'
};




// linting tasks =================================================================
// js
/*
	ToDo:
	- add code for outputing linting reports to file
*/
gulp.task('lint-js', function() {
	return gulp.src( paths.js )
		.pipe( jshint() )
		.pipe( jshint.reporter( stylish ))
		.pipe( livereload() );
});

// sass
/*
	ToDo:
	- add code for outputing linting reports to file
*/
gulp.task('lint-sass', function() {
	return gulp.src( paths.sass )
    	.pipe( scsslint() )
    	.pipe( livereload() );
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
// js
/*
	ToDo:
	- minification doesn't work
*/
gulp.task('process-scripts', ['clean-js'], function() {
	return gulp.src( paths.js )
		.pipe( concat( 'app.js' ))
		.pipe( gulp.dest( paths.jsOut ))
		.pipe( rename( {suffix: '-min'} ))
		.pipe( uglify() )
		.pipe( gulp.dest( paths.jsOut ));
});

// sass
gulp.task('process-styles', ['clean-css'], function() {
	return sass( paths.sass[1], {style: 'expanded'} )
		.pipe( autoprefixer('last 2 version') )
		.pipe( gulp.dest( paths.cssOut ) )
		.pipe( rename({suffix: '-min'}) )
		.pipe( minifycss() )
		.pipe( gulp.dest( paths.cssOut ) );
});

// html
gulp.task('process-html', ['clean-html'], function() {
	return gulp.src( paths.html )
		.pipe( flatten() )
		.pipe( gulp.dest( paths.htmlOut ));
});

// images
/*
	ToDo:
	- implement the image build task
*/
gulp.task('process-images', ['clean-img'], function() {
  return gulp.src( paths.images )
		.pipe( imagemin( {optimizationLevel: 5} ))
		.pipe( gulp.dest( paths.imgOut ));
});




// clean tasks ==================================================================
// js 
gulp.task('clean-js', function () {
    return gulp.src( paths.jsOut, {read: false} )
        .pipe( clean() );
});

// css 
gulp.task('clean-css', function () {
    return gulp.src( paths.cssOut, {read: false} )
        .pipe( clean() );
});

// html
gulp.task('clean-html', function () {
    return gulp.src( paths.htmlOut, {read: false} )
        .pipe( clean() );
});

// images
gulp.task('clean-img', function () {
    return gulp.src( paths.imgOut, {read: false} )
        .pipe( clean() );
});




// watch & livereload tasks ======================================================
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch( paths.js, 		['lint-js', 'process-scripts']);
	gulp.watch( paths.sass, 	['lint-sass', 'process-styles']);
	gulp.watch( paths.html,		['process-html']);
	gulp.watch( paths.images 	['process-images']);
});




// default tasks ======================================================
gulp.task('default', [
						'watch', 
						'lint-js',
						'clean-js',
						'process-scripts',
						'lint-sass',
						'clean-css',
						'process-styles',
						'clean-html',
						'process-html',
						'clean-img',
						'process-images'
					]
);






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







