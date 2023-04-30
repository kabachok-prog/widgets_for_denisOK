window.addEventListener("DOMContentLoaded", () => {
  // acc
  
  const accBtn = document.querySelectorAll('.stages__button-title');
  const accDescr = document.querySelectorAll('.stages__descr-item');
  const accParent = document.querySelector('.stages__buttons'); 

  function hideDescr() {
    accDescr.forEach(item => {
      item.style.display = 'none';
    });

    accBtn.forEach(item => {
      item.classList.remove('stages__button-title--active');
    });
  }

  function showDescr(i = 0) {
    accDescr[i].style.display = 'block';
    accBtn[i].classList.add('stages__button-title--active');
  }

  hideDescr();
  showDescr();

  accParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains("stages__button-title")) {
      accBtn.forEach((item, i) => {
        if (target == item) {
          hideDescr();
          showDescr(i);
        }
      });
    }
  })
});
