var express = require('express');

var app = express();

// Require the routes from the index.js file
var routes = require('./routes');

var path = require('path');

// Set the template language to ejs
app.set('view engine', 'ejs');

// Server static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// HOME route
app.get('/', routes.index);

// Individual movie route
app.get('/star_wars_episode/:episode_number?', routes.star_wars_episode);

// All other routes
app.get('*', routes.notFound);


// Listen on port 3000
app.listen(process.env.PORT || 3000);