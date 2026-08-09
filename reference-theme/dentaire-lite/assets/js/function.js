(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});
	
	/* Slick Menu JS */
	if($('.main-menu').length) { 
		$('.main-menu').slicknav({
			label : '',
			prependTo : '.responsive-menu'
		});
	}

})(jQuery);