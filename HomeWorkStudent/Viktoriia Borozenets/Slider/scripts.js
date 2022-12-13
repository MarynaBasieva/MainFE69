const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
console.log(slidesCount);

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
let imageChange = (e) => {
  document.querySelector(".main-slide1").style.backgroundImage = `url(${e})`;
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
