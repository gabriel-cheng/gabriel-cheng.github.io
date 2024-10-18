const url = "https://hook.us1.make.com/477x1ufni3odfjbhmdx3hqd8h34jlrwg";
const form = document.querySelector("#rentability_form");

form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#tel");

    const data = {
        "name": name.value,
        "email": email.value,
        "phone": formatNumber(phone.value)
    }

    try {
        const response = await fetch(url, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(data)
        });
   
        showPopup("positive", "Mensagem enviada!");
    } catch (error) {
        showPopup("negative", "Mensagem não enviada.");
        console.error('Erro ao enviar o formulário:', error);
    }
});

function formatNumber(number) {
    const new_number = number.replace(/\D/g, '').replace(/^55/, '');

    return new_number;
}