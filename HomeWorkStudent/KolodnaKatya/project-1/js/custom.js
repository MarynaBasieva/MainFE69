jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

jQuery(".responsive_menu_bar").on("click",function(){
		jQuery(".menu").toggle("slow");
});
jQuery(".closed-menu").on("click",function(){
		jQuery(".menu").hide("slow");
});
	
	let carousel = jQuery('#carousel');

	carousel.owlCarousel({
		items: 3,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				dots: false,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			767:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			991:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			1099:{
				items: 3,
				dots: true,
				mouseDrag: true
			}
		}
	});

});