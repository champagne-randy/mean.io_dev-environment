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
		research and apply techniques
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


- Semantic.ui starter kit
	- move semantic starter code to this repo
	- update semantic.html file to be a base for sematic frontend projects


- Bootstrap starter kit
	- write a bootstrap.html file to be a base for bootstratp frontend projects


- HTML templates
	- research html templates and compile a pros/cons list
		jade

- Git
	- create a github remote for this project







---------------------------------------------------------------------
directory structure
---------------------------------------------------------------------

- app
--------- models/
-------------- nerd.js <!-- the nerd model to handle CRUD -->
----- routes.js
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


-----------------------
commands
-----------------------

md -p app/models;md -p config;md -p public/css;md -p public/js;md -p public/js/controllers;md -p public/js/services;md -p public/img;md -p public/libs;md -p public/views


















