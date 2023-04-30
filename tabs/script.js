window.addEventListener("DOMContentLoaded", () => {
  // slider
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-custom',
      type: 'bullets',
      clickable: true
    },
  });

  // tabs

  const tabsBtn = document.querySelectorAll(".swiper__company");
  const tabsContent = document.querySelectorAll(".about__case");
  const tabsParent = document.querySelector(".swiper-wrapper");

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

    if (target && target.classList.contains("swiper__company")) {
      tabsBtn.forEach((item, i) => {
        if (target == item) {
          hideTab();
          showTab(i);
        }
      });
    }
  });
});
