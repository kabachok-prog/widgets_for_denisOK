window.addEventListener('DOMContentLoaded', () => {
  const splide2 = new Splide('#splide2', {
    type: 'loop',
    perPage: 1,
    autoplay: false,
    pauseOnHover: false,
    interval: 7000,
    rewind: true,
    arrows: false,
    pagination: false,
  }).mount();
});