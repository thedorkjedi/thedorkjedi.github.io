core = core || {};

core.insta = function(){
  this.objects = {
    elements: jQuery('.bg-squares'),
    background: jQuery('.background'),
    frame: jQuery('.chosen'),
    activeClass: 'background-active'
  };
}

core.insta.prototype.frameEvents = function(){
  var obj = this.objects;

  return {
    runEvents: function (event){
      event.preventDefault();

      var self = jQuery(this),
          imgSrc = self.find('img').prop('src'),
          insertedImg = jQuery('<img>',{ 'src': imgSrc.replace('_m.jpg','_z.jpg') });

      obj['background'].addClass(obj.activeClass);
      obj['frame'].html(insertedImg);
      obj['frame'].removeClass(obj.activeClass);

    },
    turnBackEvents: function(event){
      event.preventDefault();

      obj['background'].removeClass(obj.activeClass);
      obj['frame'].addClass(obj.activeClass);
    }
  }
}

core.insta.prototype.bindEvents = function(){
  var obj = this.objects,
      evt = this.frameEvents();

  (function($,w){
    $(obj.elements).click(evt.runEvents);
    $(obj.frame).click(evt.turnBackEvents);
  })(jQuery,window);
}