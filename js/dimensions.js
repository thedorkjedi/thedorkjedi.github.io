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
        numberOfSquares = 5,
        className = "bg-squares",
        widths = (this.screen().width) / numberOfSquares,
        imgURLs = "";

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

    function setImgURLS(obj){
      jQuery.each(obj,function(id,val){
        var url = val['media']['m'];
        var img = jQuery('img',{ 'src': url });

        jQuery('.bg-squares').eq(id).append(img);
      });
    }

    jQuery.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=112293664@N05&lang=en-us&format=json&jsoncallback=?', function (d) {
        setImgURLS(d.items);
    });

    return sqr;
}
