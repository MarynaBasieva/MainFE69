jQuery.noConflict();
jQuery(document).ready(function () {

	'use strict';




	jQuery(".header__burger").on("click", function () {
		jQuery(".header__menu").slideDown();
	});
	jQuery(".header__close").on("click", function () {
		jQuery(".header__menu").slideUp();
	});

});







let carousel = jQuery('#product__carousel');
carousel.owlCarousel({
	items: 3,
	loop: true,
	// показивать кнопки листаний вперед/назад
	nav: true,
	// можно вставить свои стрелки навигации
	navText: ["<i class='fa-solid fa-circle-arrow-left'></i>", "<i class='fa-solid fa-circle-arrow-right'></i>"],
	// Установите свой собственный контейнер для навигации.
	// navElement: span,
	navContainer: false,
	dots: true,
	// точка для каждого елемента
	// dotsEach: true,
	autoplay: false,
	autoplayTimeout: 5000,
	// при наведении мышкой на слайд будет пауза
	autoplayHoverPause: true,
	margin: 107,
	// когда можно видеть соседние обьекты
	stagePadding: 0,
	responsive: {
		0: {
			items: 1,
			dots: true,
			nav: false,
			margin: 10,
			mouseDrag: true,
			autoplay: true,
			smartSpeed: 1000
		},
		560: {
			items: 2,
			dots: true,
			nav: false,
			margin: 10,
			// перетягивать мышкой
			mouseDrag: true,
			// перетягивать пальцем
			touchDrag: true,
			autoplay: true,
			smartSpeed: 1000
		},
		767: {
			items: 2,
			dots: true,
			nav: false,
			margin: 50,
			mouseDrag: true,
			touchDrag: true,
			autoplay: true,
			smartSpeed: 1000
		},
		992: {
			items: 3,
			dots: true,
			mouseDrag: true,
			touchDrag: true,
			autoplay: true,
			smartSpeed: 1000
		},

		1199: {
			items: 3,
			nav: true,
			dots: true,
			mouseDrag: true,
			touchDrag: true,
			autoplay: true,
			smartSpeed: 1000
		},
	}
});

let carousel2 = jQuery('#testimonials__carousel');
carousel2.owlCarousel({
	items: 1,
	loop: true,
	// показивать кнопки листаний вперед/назад
	nav: true,
	// можно вставить свои стрелки навигации
	navText: ["<i class='fa-solid fa-circle-arrow-left'></i>", "<i class='fa-solid fa-circle-arrow-right'></i>"],
	// Установите свой собственный контейнер для навигации.
	// navElement: span,
	navContainer: false,
	dots: true,
	// точка для каждого елемента
	// dotsEach: true,
	autoplay: false,
	autoplayTimeout: 5000,
	smartSpeed: 1000,
	touchDrag: true,
	mouseDrag: true,
	// при наведении мышкой на слайд будет пауза
	autoplayHoverPause: true,
	margin: 0,
	// когда можно видеть соседние обьекты
	stagePadding: 0,
	responsive: {
		0: {
			// items: 1,
			// dots: true,
			nav: false,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		560: {
			// items: 2,
			// dots: true,
			nav: false,
			// перетягивать мышкой
			// mouseDrag: true,
			// // перетягивать пальцем
			// touchDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		767: {
			// items: 2,
			// dots: true,
			nav: false,
			// mouseDrag: true,
			// touchDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		// 992: {
		// 	items: 3,
		// 	dots: true,
		// 	mouseDrag: true,
		// 	touchDrag: true,
		// 	autoplay: true,
		// 	smartSpeed: 1000
		// },

		// 1199: {
		// 	items: 3,
		// 	nav: true,
		// 	dots: true,
		// 	mouseDrag: true,
		// 	touchDrag: true,
		// 	autoplay: true,
		// 	smartSpeed: 1000
		// },
	}
});




carousel.on('mousewheel', '.owl-stage', function (e) {
	if (e.deltaY > 0) {
		carousel.trigger('next.carousel');
	} else {
		carousel.trigger('prev.carousel');
	}
	e.preventDefault();
});


	// });
// });













