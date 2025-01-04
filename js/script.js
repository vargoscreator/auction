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
  const headerBurger = document.querySelectorAll('.header__burger, .header__menu-bg, .header__menu-close');
  const headerMenu = document.querySelector('.header__menu');
  const headerMenuBg = document.querySelector('.header__menu-bg');

  headerBurger.forEach(element => {
    element.addEventListener('click', () => {
      headerMenu.classList.toggle('active');
      headerMenuBg.classList.toggle('active');
    });
  });

  const bitsItems = document.querySelectorAll('.account__bits-item');
  bitsItems.forEach(item => {
      const color = item.getAttribute('data-color');
      const bitsTop = item.querySelector('.account__bits-top');
      const bitsPrice = item.querySelector('.account__bits-price');
      
      if (color) {
        bitsTop.style.border = `5px solid ${color}`;
        bitsPrice.style = `background: ${color}`;
      }
  });
});

const affiliateLinks = document.querySelectorAll('.account__affialte-select span');
const affiliateResults = document.querySelectorAll('.account__affialte-result');
affiliateLinks.forEach(link => {
    link.addEventListener('click', () => {
        affiliateLinks.forEach(link => link.classList.remove('active'));
        affiliateResults.forEach(result => result.classList.remove('active'));
        link.classList.add('active');
        const targetAffiliate = document.querySelector(`.account__affialte-result[data-affiliate="${link.id}"]`);
        if (targetAffiliate) {
            targetAffiliate.classList.add('active');
        }
    });
});

