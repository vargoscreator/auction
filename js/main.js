let swiper = new Swiper(".membership__slider", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    allowTouchMove: true,
    navigation: {
        nextEl: ".membership__slider-next",
        prevEl: ".membership__slider-prev",
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        },
        1000: {
            spaceBetween: 0,
        },
    },
});