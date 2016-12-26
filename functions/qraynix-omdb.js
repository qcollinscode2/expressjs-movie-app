(function (window, document) {
  
  var root = window;

  if ( typeof module === "object" && typeof module.exports === "object" ) {

    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ?
      factory( global, true ) :
      function( w ) {
        if ( !w.document ) {
          throw new Error( "jQuery requires a window with a document" );
        }
        return factory( w );
      };
  } else {
    factory( global );
  }

  root.q$_omdbAjax = function(url, item) {
      return q$_callAjax(url, function(data) {
        var json = JSON.parse(data);
        var image = json["Poster"];
        switch(item) {
            case "Poster": {
              if(image !== "N/A") {
                q$_1('img').setAttribute('src', image);
              }
              break;
            }
          case "Title": {
            if(image !== "N/A") {
              q$_1('.title').innerHTML = json["Title"];
            }
          }
          default:
            q$_log(json);
        }
        /*if(item == "Poster") {
           if(image !== "N/A") {
            q$_1('img').setAttribute('src', image);
          }
        }else {
          console.log(json[item]);
        }*/
      });
    }

    root.q$_omdb = function(name, role) {
    var url = 'http://www.omdbapi.com/?t=';
    q$_omdbAjax(url + encodeURI(name), role);
  };
  
  //root.omdbApiCall function(prop) {
  //var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
  //var randomMovie = randomMovieArray[randomNumber];
  //q$_omdb(randomMovie, prop);
//}
  
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ));