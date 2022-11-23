jQuery.noConflict();
jQuery(document).ready(function () {
  jQuery(".owl-carousel").owlCarousel();
  
  jQuery(".responsive_menu_bar").on("click",function(){
		jQuery(".menu").toggle("slow");
  });

  jQuery(".closed_menu").on("click", function(){
		jQuery(".menu").hide("slow");
  });

  let carousel = jQuery('#carousel_partner');	
	carousel.owlCarousel({
		items: 4,
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
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			1099:{
				items: 1,
				dots: false,
				mouseDrag: true
			}
		}
	});
});

  
  