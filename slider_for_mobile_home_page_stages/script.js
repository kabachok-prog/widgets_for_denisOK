window.addEventListener('DOMContentLoaded', () => {
  const splide3 = new Splide('#splide4', {
    type: 'loop',
    perPage: 1,
    autoplay: false,
    pauseOnHover: false,
    interval: 7000,
    rewind: true,
    arrows: false,
    pagination: {
      type: 'slide',
    },
  }).mount();
});