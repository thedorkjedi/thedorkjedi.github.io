core = core || {};

core.dimensions = function(){
  this.squareClass = "bg-squares";
  this.numberOfSquares = 20;
  this.squares = function(element, sqrs){
    var sqr = [];

    for( var i=0; i<sqrs; i++ ){
      sqr.push(document.createElement(element));
      sqr[i].className = this.squareClass;
      sqr[i].id = "SQR-" + (i + 1);
    }

    return sqr;
  };
}

//generate squares
core.dimensions.prototype.setSquares = function(){
    var _this = this;

    var sqr = _this.squares('div',_this.numberOfSquares);
    var bg = document.getElementById('background');

    bg.innerHTML = "";

    for(i in sqr){
      bg.appendChild(sqr[i]);
    }

    function setImgURLS(obj){
      jQuery.each(obj,function(id,val){
        var url = val['media']['m'];
        //var img = jQuery('<img>',{ 'src': url });
        var img = new Image();
        img.src = url;

        jQuery("." + _this.squareClass).eq(id).append(img);
      });
    }

    jQuery.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=112293664@N05&lang=en-us&&display_all=1&format=json&jsoncallback=?', function (d) {
      setImgURLS(d.items);
    });

    return sqr;
}
