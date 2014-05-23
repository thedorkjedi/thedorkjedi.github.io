core = core || {};

core.insta = function(){
  this.objects = {
    elements: jQuery('.bg-squares'),
    minimizer: jQuery('.minimize-header,.mini-title'),
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
      !(obj['header'].hasClass(obj.minimizeClass)) ? obj['header'].find('.minimize-header').trigger('click') : "";
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
      if(self.hasClass('minimize-header')){
        obj['header'].hasClass(obj.minimizeClass) ? obj['header'].removeClass(obj.minimizeClass) : obj['header'].addClass(obj.minimizeClass);
      }
      if(self.hasClass('mini-title')){
        if(!obj['background'].hasClass(obj.activeClass)){
          obj['header'].removeClass(obj.minimizeClass);
        } else {
          obj['frame'].find('img').trigger('click');
          obj['minimizer'].trigger('click');
        }
      }
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