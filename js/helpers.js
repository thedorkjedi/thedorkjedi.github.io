core = core || {};

core.helpers = function(){
	return{
		isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false,
		isAppleMobile:/iPhone|iPod/i.test(navigator.userAgent) ? true : false,
		isAndroid: /Android/i.test(navigator.userAgent) ? true : false
	}
}
