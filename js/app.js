// A test sandbox for RequireJS, JQuery, and SVG
define(["jquery"], function($) {

  function start() {
    item1();
    item2();
  }

  function item1() {
    $("#clickableRect").click(function(){
      alert("The rectangle was selected via jQuery, which then was used to fire up this alert!");
    });
  }

  function item2() {
    $("#dynamicClickBtn").click(createAnimatedClickableCircle);
  }

  function createAnimatedClickableCircle(event) {
    $("#dynamicClickBtn").addClass("disabled");
    var circ = createSVG("circle", {cx: "5", cy: "5", r: "3", fill: 'red'});
    $("#dynamicClickSVG").append(circ);
    $(circ).click(animatedCircleHandler);
  }

  function createSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
      el.setAttribute(k, attrs[k]);
    }
    return el;
  }

  function animatedCircleHandler(event) {
    alert("jQuery was used to create this circle, which listened to the" +
        "click event you just triggered!");
  }

  //return an object to define the module.
  return {
    run: start 
  }
});
