core = core || {};

core.dimensions = function(){
  this.getImgURLs = function(url){
    var obj;
    jQuery.getJSON(url, function (d) {
      obj = d.items;
    });
    return obj;
  }
}

//generate background
core.dimensions.prototype.setBackground = function(){

  var _self = this;

  function setImgURLS(obj){
    jQuery.each(obj,function(id,val){
      var url = val['media']['m'];
      var img = jQuery('<img>',{ 'src': url });

      jQuery('.bg-squares').eq(id).append(img);
    });
  }

  return {
    init: function(){
      setImgURLS(_self.getImgURLs('http://api.flickr.com/services/feeds/photos_public.gne?id=112293664@N05&lang=en-us&&display_all=1&format=json&jsoncallback=?'));
    }
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

    var setBg = this.setBackground();
    setBg.init();

    return sqr;
}