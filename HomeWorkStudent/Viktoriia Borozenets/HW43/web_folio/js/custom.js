jQuery.noConflict();
jQuery(document).ready(function () {
  "use strict";

  jQuery(".fancybox").fancybox();

  jQuery(".responsive_menu_bar").on("click", function () {
    jQuery(".menu").toggle("slow");
  });
  jQuery(".closed_menu").on("click", function () {
    jQuery(".menu").hide("slow");
  });
  /* $(".rating").rating();
  const ratings = document.querySelectorAll(".rating");
  if (ratings.length > 0) {
    initRatings();
  }
  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating();
    }
    function initRating(rating) {
      initRatingVars(rating);
    }
    function initRatingVars(rating) {
      ratingActive = rating.querySelector(".rating__active");
    }
  }*/
  let carousel = jQuery("#carousel_partner");

  carousel.owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: true,
    navText: [""],
    dots: false,
    mouseDrag: true,
    margin: 30,
    stagePadding: 0,
    autoWidth: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      479: {
        items: 1,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      767: {
        items: 2,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      991: {
        items: 3,
        dots: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1000,
      },
      1099: {
        items: 4,
        dots: false,
        mouseDrag: true,
      },
    },
  });

  let carousel1 = jQuery("#carousel_cards");
  carousel1.owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: true,
    navText: [
      '<img src="img/left_arrow.png">',
      '<img src="img/right_arrow.png">',
    ],
    dots: false,
    mouseDrag: true,
    margin: 30,
    stagePadding: 0,
    autoWidth: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      479: {
        items: 1,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      767: {
        items: 2,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      991: {
        items: 2,
        dots: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1000,
      },
      1099: {
        items: 2,
        mouseDrag: true,
        nav: true,
      },
    },
  });
  let carousel2 = jQuery("#carousel_products");
  carousel2.owlCarousel({
    items: 3,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: false,
    navText: [""],
    dots: true,
    mouseDrag: true,
    margin: 30,
    stagePadding: 0,
    autoWidth: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      479: {
        items: 1,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      767: {
        items: 2,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 1000,
      },
      991: {
        items: 3,
        dots: true,
        mouseDrag: true,
        autoplay: false,
        smartSpeed: 1000,
      },
      1099: {
        items: 3,
        mouseDrag: true,
      },
    },
  });

  ("use strict");
  function r(f) {
    /in/.test(document.readyState) ? setTimeout("r(" + f + ")", 9) : f();
  }
  r(function () {
    if (!document.getElementsByClassName) {
      // ?????????????????? IE8
      var getElementsByClassName = function (node, classname) {
        var a = [];
        var re = new RegExp("(^| )" + classname + "( |$)");
        var els = node.getElementsByTagName("*");
        for (var i = 0, j = els.length; i < j; i++)
          if (re.test(els[i].className)) a.push(els[i]);
        return a;
      };
      var videos = getElementsByClassName(document.body, "youtube");
    } else {
      var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i = 0; i < nb_videos; i++) {
      // ?????????????? ???????????? ?????? ??????????, ???????? ID ???????????? ??????????
      videos[i].style.backgroundImage =
        "url(http://i.ytimg.com/vi/" + videos[i].id + "/sddefault.jpg)";
      // ?????????????????? ?????? ???????????????? ???????????? Play, ?????????? ?????????????? ???????????? ????????????
      var play = document.createElement("div");
      play.setAttribute("class", "play");
      videos[i].appendChild(play);
      videos[i].onclick = function () {
        // ?????????????? iFrame ?? ?????????? ???????????????? ?????????????????????? ??????????, ??.??. ?????????????? autoplay ?? ?????????? ?? ???????????????? 1
        var iframe = document.createElement("iframe");
        var iframe_url =
          "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
        if (this.getAttribute("data-params"))
          iframe_url += "&" + this.getAttribute("data-params");
        iframe.setAttribute("src", iframe_url);
        iframe.setAttribute("frameborder", "0");
        // ???????????? ?? ???????????? iFrame ?????????? ?????? ?? ????????????????-????????????????
        iframe.style.width = this.style.width;
        iframe.style.height = this.style.height;
        // ???????????????? ?????????????????? ?????????????????????? (????????????) ???? iFrame
        this.parentNode.replaceChild(iframe, this);
      };
    }
  });
});
