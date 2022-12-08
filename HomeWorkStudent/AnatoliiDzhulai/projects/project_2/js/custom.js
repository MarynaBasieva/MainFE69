jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
jQuery(".responsive_menu_button").on("click",function(){
	jQuery(".main_menu").toggle("slow");
});
	jQuery(".closed_menu").on("click",function(){
		jQuery(".main_menu").hide("slow");
	});

	jQuery('.footer_menu_1 h2, .footer_menu_2 h2, .footer_menu_3 h2, .footer_menu_4 h2, .footer_menu_5 h2').on('click',function (){
	jQuery('.footer_menu_1 ul, .footer_menu_2 ul, .footer_menu_3 ul, .footer_menu_4 ul, .footer_menu_5 ul').toggle('slow')
});
	});
