window.addEventListener("DOMContentLoaded", () => {
  // slider
  // const swiper = new Swiper(".swiper", {
  //   slidesPerView: 1,
  //   pagination: {
  //     el: '.swiper-pagination-custom',
  //     type: 'bullets',
  //     clickable: true,
  //     loop: true,
  //     loopedSlides: 1,
  //   },
  // });

  var splide = new Splide('.splide', {
    type: 'slide',
    perPage: 1,
    autoplay: false,
    pauseOnHover: false,
    interval: 7000,
    rewind: true,
    arrows: false,
    pagination: {
      type: 'slide', // Отключить увеличение точек пагинации
    },
  }).mount();
  // tabs

  const tabsBtn = document.querySelectorAll(".splide__company");
  const tabsContent = document.querySelectorAll(".about__case");
  const tabsParent = document.querySelector(".splide__track");

  function hideTab() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
  }

  function showTab(i = 0) {
    tabsContent[i].style.display = "block";
  }

  hideTab();
  showTab();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);

    if (target && target.classList.contains("splide__company")) {
      tabsBtn.forEach((item, i) => {
        if (target == item) {
          hideTab();
          showTab(i);
        }
      });
    }
  });
});
