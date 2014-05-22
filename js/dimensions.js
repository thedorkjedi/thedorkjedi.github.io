core = core || {};


core.dimensions = function(){
  this.screen = function(){
    var dimensions = document.clientWidth ? document : document.documentElement;

    return {
      width: dimensions.clientWidth,
      height: dimensions.clientHeight
    }
  }
}

//generate squares
core.dimensions.prototype.setSquares = function(){
    var _this = this,
        numberOfSquares = 8,
        className = "bg-squares",
        widths = (this.screen().width) / numberOfSquares;

    var squares = function(){
      var sqr = [];

      for( var i=0; i<(numberOfSquares * numberOfSquares); i++ ){
        sqr.push(document.createElement('div'));
        sqr[i].className = className;
      }

      return sqr;
    }

    var sqr = squares();
    var bg = document.getElementsByClassName('background')[0];

    bg.innerHTML = "";

    for(i in sqr){
      bg.appendChild(sqr[i]);
    }

    return sqr;
}
