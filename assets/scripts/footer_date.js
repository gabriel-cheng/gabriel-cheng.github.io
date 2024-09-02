const footer_date = document.querySelector("#footer_date");
const date = new Date();
const year = date.getFullYear();

footer_date.textContent = year;