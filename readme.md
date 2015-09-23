/*-------------------------------------------------------------------
README		MEAN Stack Starter Kit
---------------------------------------------------------------------
			single page application
			www.scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
-------------------------------------------------------------------*/



---------------------------------------------------------------------
How to use
---------------------------------------------------------------------

- update package.json
	update package name
	add license

- $ npm install
	to install all backend dependencies

- update bower.json
	update package name
	list missing front end frameworks for project

- $ bower install
	to install all frontend dependencies




---------------------------------------------------------------------
ToDo
---------------------------------------------------------------------

- Angular best practices
	- directory structure
		x research and apply techniques
		** update views after each dir update
		** verify that build still works in browser

	- style guide
		research and apply techniques
		writing controllers for minification
		skinny controllers: use services and application states over bloated controllers
		modularize the app: split app code into components


- SASS best practices
	- directory structure
		research and apply techniques


- Gulp best practices
	- config file
		once dir structures are define, update tasks to use config file
		config file will include:
			port:			where node should attach
			frontend lib:	which frontend lib are we using for this project
			app server:		where the app should be deployed after build (if at all)
	- use Scotch.io gulp starter kit as example on how to write a gulp build
		https://github.com/scotch-io/gulp-start/blob/master/gulpfile.js
	- write dev, test, and prod tasks
		- this is the begining of the dev task
		- I will use this to launch grunt for dev work
		- once completed, will use it as a model for prod and test tasks
		https://www.npmjs.com/package/gulp-nodemon


- Server.js best practices
	- config file
		use the same config file to abstract server settings
		database
	- directory structure
		research and apply techniques
		can I take a modular approach similar to the frontend organization?


- Semantic.ui starter kit
	- move semantic starter code to this repo
	- update semantic.html file to be a base for sematic frontend projects


- Bootstrap starter kit
	- write a bootstrap.html file to be a base for bootstratp frontend projects


- HTML templates
	- research html templates and compile a pros/cons list
		jade
		swig

- Git
	- create a github remote for this project







---------------------------------------------------------------------
ol directory structure
---------------------------------------------------------------------

- app
--------- models/
-------------- nerd.js <!-- the nerd model to handle CRUD -->
----- node.routes.js
- config
--------- db.js 
- node_modules <!-- created by npm install -->
- public <!-- all frontend and angular stuff -->
----- css
----- js
---------- controllers <!-- angular controllers -->
---------- services <!-- angular services -->
---------- app.js <!-- angular application -->
---------- appRoutes.js <!-- angular routes -->
----- img
----- libs <!-- created by bower install -->
----- views 
---------- home.html
---------- nerd.html
---------- geek.html
----- index.html
- .bowerrc <!-- tells bower where to put files (public/libs) -->
- bower.json <!-- tells bower which files we need -->
- package.json <!-- tells npm which packages we need -->
- server.js <!-- set up our node application -->





---------------------------------------------------------------------
new directory structure
---------------------------------------------------------------------


- server/ 									# All of the Server side code resides in the /server directory.
------ config/     							# Configuration files
------ controllers/							# Server side logic goes here
------ models/     							# Database Schema Models
------ routes/     							# Rest api endpoints for routing
------ views/      							# Swig based html rendering
- client/									# All of the Client side code resides in the /client directory.
------ app/									# Modularized angular components (directives, views, services, controllers)
--------- components/						# Each component (page) is treated as a mini Angular app (no directives)
---------------- home/ 
------------------- homeController.js 		# Controller file that handles data for home page
------------------- homeRoutes.js 			# Routing file to handle all routes related to the home page
------------------- homeService.js 			# Service file that handles http requests for home page
------------------- homeView.html 			# (Partial) template for the home page
---------------- blog/
------------------- blogController.js 		# Controller file that handles data for blog page
------------------- blogRoutes.js 			# Routing module to handle all routes related to the blog page
------------------- blogService.js 			# Service file that handles http requests for blog page
------------------- blogView.html 			# (Partial) template for the blog page
---------------- core/						# Container for compnents that will remain the same accross the app
------------------- header/
----------------------- headerDirective.js 
----------------------- headerView.html
------------------- footer/
----------------------- footerDirective.js 
----------------------- footerView.html
--------- config/							# Container for angular routes and modules files
---------------- app.modules.js 			# This file will handle the setup for the Angular app
---------------- app.routes.js 				# This file will handle all the routes and route configurations
--------- images/							# Uncompressed images
--------- libraries/						# Raw front-end libraries
--------- styles/							# Raw Sass files
---------------- base/						# Contains global styles, such as resets, typography, colors, etc.
------------------- _module.scss
---------------- components/ 				# Contains each self-contained component in its own .scss partial
------------------- _module.scss
---------------- layout/ 					# Contains styling for larger layout components; e.g. nav, header, footer, etc.
------------------- _module.scss
---------------- pages/ 					# Contains page-specific styling, if necessary
------------------- _module.scss
---------------- themes/ 					# Contains styling for different themes
------------------- _module.scss
---------------- utils/ 					# Contains global mixins, functions, helper selectors, etc.
------------------- _module.scss
---------------- vendors/ 					# Contains 3rd-party styles, mixins, etc.
------------------- _module.scss
---------------- main.scss 					# Output file that brings together all of the above parts
--------- shared/							# Container for reusable components (directives or partials) of our site
---------------- sidebar/
------------------- sidebarDirective.js 
------------------- sidebarService.js
------------------- sidebarView.html
---------------- article/
------------------- articleDirective.js
------------------- articleView.html
------ public/     							# These are the files that will be served to clients
--------- css/								# responsive-ready compressed images that have been processed for dev
--------- img/								# compiled & minified css files
--------- js/								# minified javascript files
--------- libs/								# frontend libraries
------ index.html 							# primary (entry point) file where all Angular elements are loaded






src: http://learn.mean.io/#mean-stack-packages-files-structure




-----------------------
commands
-----------------------

md -p app/models;
md -p config;md -p public/css;
md -p public/js;
md -p public/js/controllers;
md -p public/js/services;
md -p public/img;
md -p public/libs;
md -p public/views


















