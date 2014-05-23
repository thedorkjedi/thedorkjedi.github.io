core = core || {};

core.insta = function(){
	this.objects = {
		elements: jQuery('.bg-squares'),
		background: jQuery('.background'),
		frame: jQuery('.chosen'),
		activeClass: 'background-active'
	};
}

core.prototype.bindEvents = function(){
	var obj = this.objects;

	function runEvents(event){
		event.preventDefault();

		var self = jQuery(this),
			imgSrc = self.find('img').prop('src'),
			insertedImg = jQuery('<img>',{ 'src': imgSrc.replace('_m.jpg','_b.jpg') });

		obj['background'].addClass(obj.activeClass);
		obj['chosen'].empty().append(insertedImg);

	}

	(function($,w){
		$(obj.elements).click(runEvents);
	})(jQuery,window);
}