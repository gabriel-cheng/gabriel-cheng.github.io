new Swiper(".home_slider-container", {
    loop: true,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true
    }
});