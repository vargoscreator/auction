document.addEventListener("DOMContentLoaded", function () {
    // let swiper = new Swiper(".swiper", {
    //     loop: false,
    //     spaceBetween: 20,
    //     slidesPerView: 2,
    //     allowTouchMove: false,
    //     navigation: {
    //         nextEl: ".button-next",
    //         prevEl: ".button-prev",
    //     },
    //     breakpoints: {
    //         775: {
    //             spaceBetween: 30,
    //             slidesPerView: 3,
    //         },
    //         931: {
    //             spaceBetween: 30,
    //             slidesPerView: 4,
    //         },
    //     },
    // });
});


function updateHeaderClass() {
    const header = document.querySelector(".header");
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
}
updateHeaderClass()
window.addEventListener("resize", updateHeaderClass);
document.addEventListener("scroll", updateHeaderClass);
  

document.addEventListener('DOMContentLoaded', () => {
  const headerBurger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');

  headerBurger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
  });

});
