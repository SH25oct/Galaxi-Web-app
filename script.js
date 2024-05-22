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

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');
  const playButton = document.getElementById('custom-play-button');

  // Function to toggle video play/pause
  function togglePlay() {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  }

  // Show the play button when video is paused
  function showPlayButton() {
      playButton.style.display = 'flex';
  }

  // Hide the play button when video is playing
  function hidePlayButton() {
      playButton.style.display = 'none';
  }

  // Play button click event
  playButton.addEventListener('click', function () {
      togglePlay();
  });

  // Video click event
  video.addEventListener('click', function () {
      togglePlay();
  });

  // Video play event
  video.addEventListener('play', function () {
      hidePlayButton();
  });

  // Video pause event
  video.addEventListener('pause', function () {
      showPlayButton();
  });

  // Initialize play button visibility
  if (video.paused) {
      showPlayButton();
  } else {
      hidePlayButton();
  }
});
