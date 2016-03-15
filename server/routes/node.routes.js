

// grab the nerd model we just created
var fs 		= require('fs');
var path	= require('path');
var Nerd 	= require(path.join(__dirname,'../models/nerd'));

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
			console.log(nerds);
			res.json(nerds);
		});
	});

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

	// frontend routes ========================================
	// route to handle all angular requests
	// for all other routes, send user to the front end application so angular can handle the routing
	app.get('*', function(req, res) {
		console.log('received get command from frontend');
		//console.log(req);
		//res.writeHead(200, { 'content-type': 'text/html' });
		var file = path.join(__dirname, '../../client/public/views/index.html');
		//fs.createReadStream(file).pipe(process.stdout);
		fs.createReadStream(file).pipe(res);	// load our assets/index.html file
		//res.end(); 
	});
};

