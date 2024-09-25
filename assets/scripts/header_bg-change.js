const header = document.querySelector(".header_main-container");

window.onscroll = () => {
    header.classList.toggle("sticky", window.scrollY > 300);
}