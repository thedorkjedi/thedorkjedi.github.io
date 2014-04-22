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
      console.log(numberOfSquares);

      for( var i=0; i<(numberOfSquares * numberOfSquares); i++ ){
        sqr.push(document.createElement('div'));
        sqr[i].className = className;
        sqr[i].style.cssText = "width:" + widths + "px;" + "height:" +  widths + "px;";
      }

      return sqr;
    }

     var sqr = squares();

     for(i in sqr){
       var bg = document.getElementsByClassName('background')[0];

       bg.innerHTML = "";
       bg.appendChild(sqr[i]);
     }

     return sqr;
}
