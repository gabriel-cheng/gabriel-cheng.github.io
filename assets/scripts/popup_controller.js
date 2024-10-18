const popup = document.querySelector(".form_popup-container");
const popupContainer = document.querySelector(".form_popup-subcontainer");
const popupDescription = document.querySelector(".form_popup-description");
const show = "form_popup-show";
let timeOutId = null;

function showPopup(type, message) {
    if(type == "negative") {
        popupContainer.style.backgroundColor = "rgba(255, 0, 0, 0.815)";
        popupDescription.textContent = message;
    } else {
        popupContainer.style.backgroundColor = "rgba(80, 255, 80, 0.815)";
        popupDescription.textContent = message;
    }

    popup.classList.toggle(show);

    if(popup.classList.contains(show)) {
        return timeOutId = setTimeout(closePopup, 5000);
    }
 
    clearTimeout(timeOutId);
}

function closePopup(type) {
    popup.classList.remove(`form_popup-show`);

    return clearTimeout(timeOutId);
}

