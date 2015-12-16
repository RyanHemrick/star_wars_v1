var appMovies = require('../movies.json');


// Index Route
exports.index = function(req, res) {

	var movies = appMovies.movies;
	// var movieTitles = [];


	// for (var i = 0; i < movies.length; i++) {
	// 	movieTitles = movieTitles.concat(movies[i].title);
	// }

	res.render('main', {
		pageTitle: 'Star Wars Movies',
		// movieTitles : movieTitles,
		movies : movies
	});
};


// Star Wars Episode Route
exports.star_wars_episode = function(req, res) {

	var episode_number = req.params.episode_number;

	var movies = appMovies.movies;

	if (episode_number >= 1 && episode_number <= 6) {


		// Gets the information with respect to the episode number
		// This allows me to not include a loop each time

		// Gets the current movie, with respect to the episode_number in the URL
		var movie = movies[episode_number - 1];

		var title = movie.title;
		// var poster = movie.poster;
		// var hero_img = movie.hero_image;
		// var movie_description = movie.description;
		var main_characters = movie.main_characters;

		// For the header
		// var movieTitles = [];
		// for (var i = 0; i < movies.length; i++) {
		// 	movieTitles = movieTitles.concat(movies[i].title);
		// }


		
		// In the future, make it so that users can only type in /1 - 6 . They can currently type in any number and not get an error
		res.render('movie_page', {
			// movieTitle : title,
			// moviePoster : poster,
			// movieTitles : movieTitles,
			pageTitle : title,
			// hero_image : hero_img,
			// movie_description : movie_description,
			main_characters : main_characters,
			movies : movies,
			movie : movie,
			episode_number : episode_number
		});
	} else {
		res.render('notFound', {
			pageTitle : "Oops. This Page Does Not Exist",
			movies : movies
		});
	}

};

// Not Found Route
exports.notFound = function(req, res) {

	var movies = appMovies.movies;

	res.render('notFound', {
		pageTitle : "Ooops. This Page Does Not Exist",
		movies : movies
	});	
};




