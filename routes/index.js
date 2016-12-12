// Home Page
exports.home = function(req, res) {
   res.render('home');
};

// Movie/Game/Tv Shows Page
exports.media_home = function(req, res) {
  res.render('media');
};

// Movie/Game/Tv Show Single Page
exports.single_page = function(req, res) {
  res.render("single_page", {
    title : "Star Wars"
  });
};

// Star Wars Movie Episode Page
exports.starWarsMovieEpisode = function(req, res) {
  var episode_number = req.params.episode_number;
  var errorMsg = "The page you are looking for is not here";
  var okMsg = "This is the page for Star Wars " + episode_number;
  if (episode_number < 1 || episode_number > 7) {
    res.send(errorMsg);
  }else {
    res.render("movie_single");
  }
};

// If the user request any page other than the star wars home page or episode page respond // with "wrong page".
exports.errorStarWars = function(req, res) {
  var episode_number = req.params.episode_number;
  res.send('wrong page bye');
};

// Movie List Page
app.get('/movies/list/:list_number?', function(req, res) {
  res.send("This is the movies list page that shows up after clicking a category");
});

exports.errorMovie = function(req, res) {
  var episode_number = req.params.episode_number;
  res.send('wrong page bye');
});

exports.errorMovieEpisode = function(req, res) {
  var episode_number = req.params.episode_number;
  res.send('wrong page bye');
});

// error Page
exports.errorOtherMovie = function(req, res) {
  res.send("This is not the page you are looking for");
});