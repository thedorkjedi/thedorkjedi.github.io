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
        className = "bg-squares"
        widths = (this.screen()) / numberOfSquares;

    var squares = function(){
      var sqr = [];

      for( var i=0; i<(numberOfSquares * numberOfSquares); i++ ){
        sqr.push(document.createElement('div'));
        sqr[i].style.width = "";
        sqr[i].style.height = "";

        sqr[i].className = className;
        sqr[i].style.width = widths + "px";
        sqr[i].style.height = widths + "px";

        console.log(sqr[i].style.width);
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
