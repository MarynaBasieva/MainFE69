jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
/*jQuery('.responsive_menu_button').on('click',function(){
	jQuery('.menu').fadeIn('slow');
});

jQuery('.close_button').on('click',function (){
	jQuery('.menu').fadeOut('slow');
});
jQuery('.lang').on('click',function (){
	jQuery('.lang_show').toggle('slow');
});

jQuery('.menu_footer_1 h2, .menu_footer_2 h2, .menu_footer_3 h2, .menu_footer_4 h2').on('click',function (){
	jQuery('.menu_footer_1 ul, .menu_footer_2 ul, .menu_footer_3 ul, .menu_footer_4 ul').toggle('slow')
});*/


	let carousel = jQuery('#review');

	carousel.owlCarousel({
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