//2) В слайдері лабораторної хзамінити колір слайдів і забражень на свої
let upBtn = document.querySelector(".up-button");
let downBtn = document.querySelector(".down-button");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
let mainSlide = document.querySelector(".main-slide");
let slideCount = document.querySelector("div").length;

let activeSliderIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;
upBtn.addEventListener("click", () => {
  changeSlider("up");
});
downBtn.addEventListener("click", () => {
  changeSlider("down");
});

function changeSlider(direction) {
  if (direction === "up") {
    activeSliderIndex++;
    if (activeSliderIndex === slideCount) {
      activeSliderIndex = 0;
    } else if (direction === "down") {
      activeSliderIndex--;
      if (activeSliderIndex < 0) {
        activeSliderIndex = slideCount - 1;
      }
    }
    let height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSliderIndex * height} px)`;
    sidebar.style.transform = `translateY(-${activeSliderIndex * height} px)`;
  }
}

let imageChange = (e) => {
  document.querySelector(".slide1").style.backgroundImage = `url(${e})`;
};
/*let mainslide1 = document.getElementById(".main-slide1");

mainslide1.addEventListener("onmouseover", () => {
  mainslide1.style.backgroundImage = `url('https://st2.depositphotos.com/3243153/8342/i/450/depositphotos_83427818-stock-photo-little-girl-building-a-snow.jpg')`;
});
let mainslide2 = document.getElementById(".main-slide2");

mainslide2.addEventListener("onmouseover", () => {
  mainslide2.style.backgroundImage = `url('https://static9.depositphotos.com/1000276/1103/i/600/depositphotos_11037943-stock-photo-winter.jpg')`;
});*/
let mainslide3 = document.getElementById(".main-slide3");

mainslide3.addEventListener("onmouseover", () => {
  mainslide3.style.backgroundImage = `url('img/snow.jpg')`;
});
let mainslide4 = document.getElementById(".main-slide4");

mainslide.addEventListener("onmouseover", () => {
  mainslide4.style.backgroundImage = `url('https://pibig.info/uploads/posts/2021-06/1623572337_16-pibig_info-p-zimnie-gori-priroda-krasivo-foto-16.jpg')`;
});
