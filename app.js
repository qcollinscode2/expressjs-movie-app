var express = require('express');

var app = express();

app.set('view engine', 'ejs');

/////////////////////////////
////////// Routes ///////////
/////////////////////////////

// Home Page
app.get('/', function(req, res) {
   res.send("This is a server response on the home page");
});

// Movie Page
app.get('/movies', function(req, res) {
  res.send("This is the movies page that lists categories");
});

// Movie List Page
app.get('/movies/list/:list_number?', function(req, res) {
  res.send("This is the movies list page that shows up after clicking a category");
});

// movie_single page
app.get('/movies/:movie_id?/:episode_number?', function(req, res) {
  var movie_id = req.params.movie_id;
  var episode_number = req.params.episode_number;
  res.send("This is the page for " + movie_id + episode_number );
  console.log("The Number" + movie_id);
});

// Tv Show Page
app.get('/tv', function(req, res) {
  res.send("This is the tv page that lists tv categories");
});

// Tv List Page
app.get('/tv/list/:epList_number?', function(req, res) {
  res.send("This is the tv list page that shows up after clicking a category");
});

// tv_single
app.get('/movies/:tv_id?/:season_epList_number?', function(req, res) {
  res.send("This is the tv list page that shows up after clicking a tv show link");
  
  var tv_id = req.params.tv_id;
  var season_epList_number = req.params.season_epList_number;
});

// Game Page
app.get('/games', function(req, res) {
  res.send("This is the games page that lists game categories");
});

// Game List Page
app.get('/games/list', function(req, res) {
  res.send("This is the games list page that shows up after clicking a category");
});

// tv_single
app.get('/games/:game_id?/:game_seq_number?', function(req, res) {
  res.send("This is the tv list page that shows up after clicking a category");
  
  var game_id = req.params.game_id;
  var game_seq_number = req.params.game_seq_number;
});


app.get("*", function(req, res) {
  res.send("Sorry! Not the page you are looking for.");
});


//////////////////////////
///////// Server /////////
//////////////////////////

// Server
app.listen(3000, function() {
  console.log("The server is running on localhost:3000");
});