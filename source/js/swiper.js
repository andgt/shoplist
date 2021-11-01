'use strict'

let promoSlider = function () {
  const swiperMain = new Swiper(".promo__swiper", {
      slidesPerView: 1,
      speed: 800,
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
  });
};

promoSlider();
