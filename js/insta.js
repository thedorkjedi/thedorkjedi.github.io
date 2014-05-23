core = core || {};

core.insta = function(){
  this.objects = {
    elements: jQuery('.bg-squares'),
    minimizer: jQuery('.minimize-header'),
    background: jQuery('.background'),
    header: jQuery('.header'),
    frame: jQuery('.chosen'),
    activeClass: 'background-active',
    minimizeClass: 'minimized'
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
      !(obj['header'].hasClass(obj.minimizeClass)) ? obj['header'].addClass(obj.activeClass) : "";
      obj['frame'].html(insertedImg);

    },
    turnBackEvents: function(event){
      event.preventDefault();

      obj['background'].removeClass(obj.activeClass);
      obj['header'].removeClass(obj.activeClass);
    },
    minimize: function(event){
      event.preventDefault();

      var self = jQuery(this);
      obj['header'].hasClass(obj.minimizeClass) ? obj['header'].removeClass(obj.minimizeClass) : obj['header'].addClass(obj.minimizeClass);
    }
  }

}

core.insta.prototype.bindEvents = function(){
  var obj = this.objects,
      evt = this.frameEvents();

  (function($,w){
    $(obj.minimizer).click(evt.minimize);
    $(obj.elements).click(evt.runEvents);
    $(obj.frame).on('click','img',evt.turnBackEvents);
  })(jQuery,window);
}