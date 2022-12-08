jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
jQuery('.responsive_menu_button').on('click',function(){
	jQuery('.resp_active_menu').fadeIn('slow');
});

jQuery('.close_button').on('click',function (){
	jQuery('.resp_active_menu').fadeOut('slow');
});


jQuery('.menu_footer_1 h2, .menu_footer_2 h2, .menu_footer_3 h2, .menu_footer_4 h2').on('click',function (){
	jQuery('.menu_footer_1 ul, .menu_footer_2 ul, .menu_footer_3 ul, .menu_footer_4 ul').toggle('slow')
});


	let carousel = jQuery('#carousel_buisness');

	carousel.owlCarousel({
		items: 6,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [''],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				mouseDrag: true
			},
			479:{
				items: 3,
				dots: true,
				mouseDrag: true
			},
			767:{
				items: 4,
				dots: true,
				mouseDrag: true
			},
			991:{
				items: 5,
				dots: true,
				mouseDrag: true
			},
			1099:{
				items: 6,
				mouseDrag: true
			}
		}
	});
	let carousel2 = jQuery('#review');

	carousel2.owlCarousel({
		items: 1,
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
				mouseDrag: true
			},
			479:{
				items: 1,
				mouseDrag: true
			},
			767:{
				items: 1,
				mouseDrag: true
			},
			991:{
				items: 1,
				mouseDrag: true
			},
			1099:{
				items: 1,
				mouseDrag: true
			}
		}
	});

});