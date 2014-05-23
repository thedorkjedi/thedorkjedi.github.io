core = core || {};

core.dimensions = function(){
  this.getImgURLs = function(url,$){
    var obj;
    $.getJSON(url, function (d) {
      obj = d.items;
    });
    return obj;
  }
}

//generate squares
core.dimensions.prototype.setSquares = function(){
    var _this = this,
        numberOfSquares = 20,
        className = "bg-squares",
        imgURLs = "";

    var squares = function(){
      var sqr = [];

      for( var i=0; i<numberOfSquares; i++ ){
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
        var img = jQuery('<img>',{ 'src': url });

        jQuery('.bg-squares').eq(id).append(img);
      });
    }

    setImgURLS(this.getImgURLs('http://api.flickr.com/services/feeds/photos_public.gne?id=112293664@N05&lang=en-us&&display_all=1&format=json&jsoncallback=?',jQuery));

    return sqr;
}