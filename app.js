var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var projRoutes = require('./routes');

/////////////////////////////
////////// Routes ///////////
/////////////////////////////

// Home Page
app.get('/', projRoutes.home);

// Movie Page
app.get('/movies', function(req, res) {
  res.render('movie_home');
});

// Star Wars Movie Home Page
app.get('/movies/starwars', function(req, res) {
  res.render("movie_single", {
    title : "Star Wars"
  });
});

// Star Wars Movie Episode Page
app.get('/movies/starwars/:episode_number?', function(req, res) {
  var episode_number = req.params.episode_number;
  var errorMsg = "The page you are looking for is not here";
  var okMsg = "This is the page for Star Wars " + episode_number;
  if (episode_number < 1 || episode_number > 7) {
    res.send(errorMsg);
  }else {
    res.render("movie_single");
  }
});

// If the user request any page other than the star wars home page or episode page respond // with "wrong page".
app.get('/movies/starwars/*', function(req, res) {
  var episode_number = req.params.episode_number;
  res.send('wrong page bye');
});

// Movie List Page
app.get('/movies/list/:list_number?', function(req, res) {
  res.send("This is the movies list page that shows up after clicking a category");
});

app.get('/movies/*', function(req, res) {
  var episode_number = req.params.episode_number;
  res.send('wrong page bye');
});

app.get('/movies/*/*', function(req, res) {
  var episode_number = req.params.episode_number;
  res.send('wrong page bye');
});

// error Page
app.get('/*', function(req, res) {
  res.send("This is not the page you are looking for");
});

//////////////////////////
///////// Server /////////
//////////////////////////

// Server
app.listen(3000, function() {
  console.log("The server is running on localhost:3000 .......");
});