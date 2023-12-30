import Swiper, { Navigation, Autoplay } from "swiper";

if (document.querySelector(".main-page-slider")) {
  new Swiper(".main-page-slider", {
    modules: [Navigation, Autoplay],
    wrapperClass: "main-page-slider-wrap",
    slideClass: "main-page-slider-slide",
    slidesPerView: "auto",
    spaceBetween: 150,
    speed: 1200,
    centeredSlides: false,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      prevEl: ".prev-btn",
      nextEl: ".next-btn",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1.6,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: "auto",
        spaceBetween: 150,
      },
    },
  });
}

const fullScreenSliders = document.querySelectorAll(".full-screen-slider");

fullScreenSliders.forEach(slider => {
  if (slider) {
    new Swiper(slider, {
      modules: [Navigation, Autoplay],
      wrapperClass: "full-screen-slider-wrapper",
      slideClass: "full-screen-slider-slide",
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 1200,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      navigation: {
        prevEl: slider.querySelector(".prev-btn"),
        nextEl: slider.querySelector(".next-btn"),
      },

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
});
