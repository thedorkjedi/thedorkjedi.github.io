core = core || {};

core.helpers = function(){
	var getBreakPoint = function(){
				var ret = "normal";
				if($('#SQR-17').css('display') == "none"){
					ret = "tablet-breakpoint"
				}
				if($('#SQR-10').css('display') == "none"){
					ret = "mobile-breakpoint"
				}
				return ret;
			};

	return{
		isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false,
		isAppleMobile:/iPhone|iPod/i.test(navigator.userAgent) ? true : false,
		isAndroid: /Android/i.test(navigator.userAgent) ? true : false,
		setBreakPoint: getBreakPoint()
	}
}
