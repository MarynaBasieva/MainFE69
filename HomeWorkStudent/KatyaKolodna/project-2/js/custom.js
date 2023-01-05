jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	jQuery(".responsive_menu_bar").on("click",function(){
		jQuery(".menu").toggle("slow");
	});
	jQuery(".closed-menu").on("click",function(){
		jQuery(".menu").hide("slow");
	});
	jQuery(".footer-heading1").on("click",function(){
		jQuery(".info_footer").toggle("slow");
	});
	jQuery(".footer-heading2").on("click",function(){
		jQuery(".works_footer").toggle("slow");
	});
	jQuery(".footer-heading3").on("click",function(){
		jQuery(".blog_footer").toggle("slow");
	});
	jQuery(".footer-heading4").on("click",function(){
		jQuery(".know_us_footer").toggle("slow");
	});
});