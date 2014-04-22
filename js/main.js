core = core || {};

core.home = function(){
  return {
    init: function(){

      var background = new core.dimensions();
      background.setSquares();
    }
  }
}

core.home().init();
