const toggle_close = document.querySelector(".toggle_close");
const options = document.querySelector(".header_list-options");
const toggle = document.querySelector(".mobile_toggle-container");


toggle_close.addEventListener("click", () => {
    options.classList.remove("_active");
    toggle_close.style.display = "none";
    document.body.style = "overflow-y: scroll";
});

toggle.addEventListener("click", () => {
    options.classList.add("_active");
    toggle_close.style.display = "initial";
    document.body.style = "overflow-y: hidden";
});