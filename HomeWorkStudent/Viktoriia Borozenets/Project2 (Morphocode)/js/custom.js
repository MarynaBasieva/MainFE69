var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

/*jQuery.noConflict();
jQuery(document).ready(function () {
  "use strict";


  jQuery(".responsive_menu_bar").on("click", function () {
    jQuery(".menu").toggle("slow");
  });
  jQuery(".closed_menu").on("click", function () {
    jQuery(".menu").hide("slow");
  });*/
/* let responsive_menu_bar = document.querySelector(".responsive_menu_bar");
  let submenu = document.querySelector(".submenu");
  responsive_menu_bar.addEventListener("click", () => {
    responsive_menu_bar.classList.toggle(".active");
    submenu.classList.toggle(".active");
  });
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      responsive_menu_bar.classList.remove("active");
      submenu.classList.remove("active");
    })
  );
  ("use strict");
  function r(f) {
    /in/.test(document.readyState) ? setTimeout("r(" + f + ")", 9) : f();
  }
  r(function () {
    if (!document.getElementsByClassName) {
      // Поддержка IE8
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
      // Находим постер для видео, зная ID нашего видео
      videos[i].style.backgroundImage =
        "url(http://i.ytimg.com/vi/" + videos[i].id + "/sddefault.jpg)";
      // Размещаем над постером кнопку Play, чтобы создать эффект плеера
      var play = document.createElement("div");
      play.setAttribute("class", "play");
      videos[i].appendChild(play);
      videos[i].onclick = function () {
        // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
        var iframe = document.createElement("iframe");
        var iframe_url =
          "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
        if (this.getAttribute("data-params"))
          iframe_url += "&" + this.getAttribute("data-params");
        iframe.setAttribute("src", iframe_url);
        iframe.setAttribute("frameborder", "0");
        // Высота и ширина iFrame будет как у элемента-родителя
        iframe.style.width = this.style.width;
        iframe.style.height = this.style.height;
        // Заменяем начальное изображение (постер) на iFrame
        this.parentNode.replaceChild(iframe, this);
      };
    }
  });
});*/
