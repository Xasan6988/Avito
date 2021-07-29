try {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
} catch {
  log
}

const menuBtn = document.querySelector('.menu-btn');
const navPanel = document.querySelector('.navbar-panel');
const closeBtn = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
  navPanel.classList.toggle('is-open');
});

closeBtn.addEventListener('click', () => {
  navPanel.classList.remove('is-open');
});
