const header_main_container = document.querySelector(".header_main-container");

window.onscroll = () => {
    header_main_container.classList.toggle("header-sticky", window.scrollY > 300);
}