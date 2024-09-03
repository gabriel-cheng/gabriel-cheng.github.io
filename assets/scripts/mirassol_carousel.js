const prev_button = document.querySelector(".home_fifth-carousel-prev p");
const next_button = document.querySelector(".home_fifth-carousel-next p");
const carousel_inner = document.querySelector(".home_fifth-carousel-inner");
const items = document.querySelectorAll(".home_fifth-carousel-item");
let current_index = 0;

function showSlide(index) {
    if(index < 0) {
        index = items.length - 1;
    } else if(index >= items.length) {
        index = 0;
    }

    carousel_inner.style.transform = `translateX(-${index * 100}%)`;
    current_index = index;
}

prev_button.addEventListener("click", () => {
    showSlide(current_index - 1);
});

next_button.addEventListener("click", () => {
    showSlide(current_index + 1);
});