const swiper = new Swiper(".swiper", {
  effect: "cards",
  cardsEffect: {
    slideShadows: false,
    rotate: false,
    perSlideOffset: 80,
  },
  autoplay: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },
  touch: {
    enabled: true
  },
  speed: 1000,
});
