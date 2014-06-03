core = core || {};

core.version = "thedorkjedi - github version 1.00";
core.home = function(){
  return {
    init: function(w,$){
      $(function(){
        //set helpers
        var helpers = core.helpers();

      	//set background
      	var background = new core.dimensions();
      	background.setSquares();

      	// set events
        if(!helpers.isAppleMobile){
        	var events = new core.insta();
        	events.bindEvents();
        }
      });
    }
  }
}

core.home().init(window,jQuery);
