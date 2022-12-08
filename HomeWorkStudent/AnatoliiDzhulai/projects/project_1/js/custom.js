jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	
	/*/*Ініціалізація каруселі*/
	
	
	let carousel = jQuery('#carousel_partner');
	carousel.owlCarousel({
		items: 4, /*скільки елементів показувати*/
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
		margin: 30, /*між картинками відступ*/
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
				items: 4,
				dots: false,
				mouseDrag: true
			}
		}
	});
	
/*Ініціалізація каруселі*/
	
	
	});

		'use strict';
		function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
		r(function(){
			if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});