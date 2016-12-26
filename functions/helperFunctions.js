
exports.apiRequest = function() {
	request(url + encodeURI(name), function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        console.log(movies);
        console.log(data.Poster);
        function renderMovie() {
          
        }
        res.render('home', {
        poster: data["Poster"]
   });
      }
   });
}