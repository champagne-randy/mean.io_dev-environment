/*-------------------------------------------------------------------
README		single page application
-------------------------------------------------------------------*/

scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular





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


















