const audio = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");
const playIcon = document.getElementById("play-music");
const pauseIcon = document.getElementById("pause-music");
const toggleButton = document.querySelector('#toggle-btn');
const navLinks = document.querySelector('#nav-links');
let isPlaying = false;

var swiper = new Swiper(".swiper", {
  grabCursor: true,
  initialSlide: 3,
  centeredSlides: true,
  slidesPerView: "7",
  spaceBetween: 5,
  speed: 1000,
  freeMode: false,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});

toggleButton.addEventListener('click', ()=> {
  navLinks.classList.toggle('active');
})

