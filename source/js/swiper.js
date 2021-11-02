'use strict'

let promoSlider = function() {
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

let productsSwiper = function() {
  const swiperProduct = new Swiper(".products__swiper", {
    slidesPerView: "auto",
    speed: 800,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
};

productsSwiper();

let specialsSwiper = function() {
  const swiperProduct = new Swiper(".specials__swiper", {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      680: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 5,
      },
    }
  });
};

specialsSwiper();

let brandsSwiper = function() {
  const swiperBrands = new Swiper(".brands__swiper", {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      680: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 5,
      },
    }
  });
};

brandsSwiper();
