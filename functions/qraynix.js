'use strict';

(function (window, document) {
  
  var root = window;
  
  var hello = function hello() {
    console.log("hello");
  };

  /**
   * Select a list of matching elements, context is optional
   */
  root.q$_ = function (selector, context) {
    return (context || document).querySelectorAll(selector);
  }

  /**
   * Select the first match only, context is optional.
   */
  root.q$_1 = function(selector, context) {
    return (context || document).querySelector(selector);
  }

  /**
   * Select the parent node of the specified element.
   */
  
  root.q$_parentElement = function(el) {
  	this.element = q$_1(el);
  	return this.element.parentNode;
  }

  /**
   * Select the next sibling node of the specified element.
   */
  root.q$_nextSibElement = function(el) {
    this.element = $_1(el);
    return this.element.nextElementSibling;
  }

  /**
   * Select the previous sibling node of the specified element.
   */
  root.q$_prevSibElement = function(el) {
    this.element = $_1(el);
    return this.element.previousElementSibling;
  }

  /**
   * logs data (or objects) to the JavaScript console.
   */
  root.q$_log = function() {
    for (var props in arguments) {
      console.log(arguments[props]);
    }
  }

  /**
   * Transforms a Javascript object into a JSON object.
   */
  root.q$_ObjToJSON = function(obj) {
    var newObj = JSON.stringify(obj);
    return newObj;
  }

  /**
   * Transforms a JSON string to a Javascript object.
   */
  root.q$_JSONToObj = function(JSONstring) {
    var newObjString = JSON.parse(JSONstring);
    return newObjString;
  }

  root.q$_callAjax = function(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
  
  root.q$_Ajax = function(url, item) {
    return q$_callAjax(url, function(data) {
      var json = JSON.parse(data);
      console.log(json[item]);
    });
  }
  
  
  
})(window, document);