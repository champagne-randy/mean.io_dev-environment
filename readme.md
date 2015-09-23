/*-------------------------------------------------------------------
README		MEAN Stack Starter Kit
			single page application
			www.scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
-------------------------------------------------------------------*/







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
		

- Server.js best practices
	- config file
		use the same config file to abstract server settings
		database








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


















