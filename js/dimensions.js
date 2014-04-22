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

core.prototype.backgroundSquares = function(){
    var _this = this;
    console.log(_this.screen);
}
