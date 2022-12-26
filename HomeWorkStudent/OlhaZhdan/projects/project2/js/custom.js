jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	
	jQuery(".fancybox").fancybox();

    jQuery(".responsive_menu_bar").on("click",function(){
		jQuery(".menu").toggle("slow");
	});
	jQuery(".closed_menu").on("click", function(){
		jQuery(".menu").hide("slow");
	});
   
	
	let carousel = jQuery('#carousel_product');	
	carousel.owlCarousel({
		items:3,
		loop:false,
		nav: true,
     	navText : ["<i class='fa-solid fa-circle-arrow-left'></i>","<i class='fa-solid fa-circle-arrow-right'></i>"],
		dots: true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			400:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			992:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},

			1199:{
				items: 3,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
		}
	});
	carousel.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			carousel.trigger('next.carousel');
		} else {
			carousel.trigger('prev.carousel');
		}
		e.preventDefault();
	});
	let carousel2 = jQuery('#carousel_product2');	
	carousel2.owlCarousel({
		items:1,
		loop:false,
		nav: true,
     	navText : ["<i class='fa-solid fa-circle-arrow-left'></i>","<i class='fa-solid fa-circle-arrow-right'></i>"],
		dots: true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:true
	});
	carousel2.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			carousel2.trigger('next.carousel2');
		} else {
			carousel2.trigger('prev.carousel2');
		}
		e.preventDefault();
	});
});






	

		