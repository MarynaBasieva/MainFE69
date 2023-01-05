jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	
	
	
	/*Ініціалізація каруселі*/
	
	let carousel2 = jQuery('#carousel_partner');
	carousel2.owlCarousel({
		items: 3, /*скільки елементів показувати*/
		autoplay: true, /*автоповтор*/
		autoplayTimeout: 6000, /*з якою затримкою прокрутка*/
		autoplayHoverPause: false, /*при наведенні картинка зупинеться*/
		smartSpeed: 1000, /*з якою швідкістю*/
		dotsSpeed: 1000, /*швидкість крапочок*/
		loop: true, /*бескінечна прокрутка*/
		nav: false, /*стрілочки втеред назад*/
		navText: [''],  /*можемо добавити іконки*/
		dots: false, /*на компютері навігації небуде*/
		mouseDrag: true, /*перетягування мишкою. або свайп пальцем*/
		margin: 0, /*між картинками відступ*/
		stagePadding: 0, /*паддінг*/
		autoWidth: false, /*автоматична ширина*/
		responsiveClass: true, 
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
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
	let slid = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    slid = slid + 256;
    if (slid > 756) {
        slid = 0;
    }
    sliderLine.style.left = -slid + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    slid = slid - 256;
    if (slid < 0) {
        slid = 512;
    }
    sliderLine.style.left = -slid + 'px';
});

	});

/*SLIDER*/




