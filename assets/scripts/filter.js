const select = document.querySelector("#portf_filter");
let options = [];
let selectedValue;

for (let i of select.options) {
    options.push(i.value);
}

select.addEventListener("change", () => {
    selectedValue = select.value;

    if (selectedValue === "todos") {
        options.forEach(optionValue => {
            let elements = document.querySelectorAll(`.${optionValue}`);
            elements.forEach(el => {
                el.classList.remove("none");
            });
        });
    } else {
        options.forEach(optionValue => {
            let elements = document.querySelectorAll(`.${optionValue}`);

            elements.forEach(el => {
                if (optionValue !== selectedValue) {
                    el.classList.add("none");
                } else {
                    el.classList.remove("none");
                }
            });
        });
    }
});
