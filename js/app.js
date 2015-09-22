// A test sandbox for RequireJS, JQuery, and SVG
define(["jquery"], function($) {

  function start() {
    $("#clickableRect").click(function(){
      alert("Clicked via app.js!");
    });
  }

  //return an object to define the "my/shirt" module.
  return {
    run: start 
  }
});
