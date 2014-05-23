core = core || {};

core.home = function(){
  return {
    init: function(){
      //set background
      var background = new core.dimensions();
      background.setSquares();

      //set events
      var events = new core.insta();
      events.bindEvents();
    }
  }
}

core.home().init();
