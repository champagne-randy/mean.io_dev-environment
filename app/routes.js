

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

	// server routes =============================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {
		Nerd.find(function(err, nerds) {

			// if there is an error retrieving, send the error
			// nothing after res.send(err) will execute
			if (err){ 
				console.log(err);
				res.send(err);
			}

			res.json(nerds);
		});
	});

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

	// frontend routes ========================================
	// route to handle all angular requests
	// for all other routes, send user to the front end application so angular can handle the routing
	app.get('*', function(req, res) {
		//console.log('received get command from frontend');
		//console.log(req);
		res.setHeader("Content-Type", "text/html");
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});
};


/*

	Issues:
	- what is the difference between front-end and back-end routes?

*/

