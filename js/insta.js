core = core || {};

core.insta = function(){
	this.objects = {
		elements: jQuery('.bg-squares'),
		background: jQuery('.background'),
		frame: jQuery('.chosen'),
		activeClass: 'background-active'
	};
}

core.insta.prototype.bindEvents = function(){
	var obj = this.objects;

	function runEvents(event){
		event.preventDefault();

		var self = jQuery(this),
			imgSrc = self.find('img').prop('src'),
			insertedImg = jQuery('<img>',{ 'src': imgSrc.replace('_m.jpg','_b.jpg') });

		obj['background'].addClass(obj.activeClass);
		obj['frame'].html(insertedImg);
		obj['frame'].removeClass(obj.activeClass);

	}

	function turnBackEvents(event){
		event.preventDefault();

		obj['background'].removeClass(obj.activeClass);
		obj['frame'].addClass(obj.activeClass);
	}

	(function($,w){
		$(obj.elements).click(runEvents);
		$(obj.frame).click(turnBackEvents);
	})(jQuery,window);
}