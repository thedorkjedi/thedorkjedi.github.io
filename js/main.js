core = core || {};

core.home = function(){
  return {
    init: function(w,$){
      $(function(){
      	console && console.log ? console.log("thedorkjedi - github version 1.00") : window.log("thedorkjedi - github version 1.00");

      	//set background
      	var background = new core.dimensions();
      	background.setSquares();

      	// set events
      	var events = new core.insta();
      	events.bindEvents();
      });
    }
  }
}

core.home().init(window,jQuery);
