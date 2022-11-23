jQuery.noConflict();
jQuery(document).ready(function () {

	'use strict';




	jQuery(".header__burger").on("click", function () {
		jQuery(".header__menu").toggle("slow");
	});
	jQuery(".header__menu").on("click", function () {
		jQuery(this).hide("slow");
	});

});






// $(document).ready(function () {
// 	$(".owl-carousel").owlCarousel({
let carousel1 = jQuery('.owl-carousel');
carousel1.owlCarousel({
	items: 3,
	autoplay: true,
	autoplaySpeed: 2000,
	autoplayTimeout: 6000,
	autoplayHoverPause: true,
	// smartSpeed: 1000,
	dotsSpeed: 1000,
	// количество точек соответствует количеству слайдов
	dotsEach: true,
	// средний слайд будет всегда по центру
	// center: true,
	loop: true,
	nav: false,
	navText: [''],
	dots: true,
	mouseDrag: true,
	margin: 20,
	stagePadding: 50,
	autoWidth: false,
	// responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			// dots: true,
			// nav: false,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		479: {
			items: 1,
			// dots: true,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		767: {
			items: 2,
			// dots: true,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		991: {
			items: 3,
			// dots: true,
			// mouseDrag: true,
			// autoplay: false,

		},
		1099: {
			items: 3,
			// dots: true,
			// mouseDrag: true
		}
	}
});


// 	});
// });













