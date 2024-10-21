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
        "phone": formatNumber(phone.value),
        "company": "Usina",
        "crm_stage_string": "Aguardando contato",
        "crm_stage_integer": "58865",
        "crm_service_string": "Usina",
        "crm_service_integer": "21305",
        "ip": await findIp(),
        "responsible": "14729",
        "dispositivo": findDisplay(),
        "data": findData(),
        "url": findUrl(),
        "reference": "Acesso direto"
    }

    try {
        await fetch(url, {
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
    const numeroFormatado = number.replace(/\D/g, '').replace(/^55/, '');

    return numeroFormatado;
}

async function findIp() {
    let ip = await fetch("https://api.ipify.org?format=json", {
        "method": "GET"
    })
    .then(response => response.json())
    .catch(error => {
        console.error("Error fetching IP address:", error);
    });

    ip = await ip.ip

    return ip;
}

function findDisplay() {
    let display = "";
    
    if (screen.width < 640 || screen.height < 480) {
        display = "Mobile";
    } else if (screen.width < 1024 || screen.height < 768) {
        display = "Tablet";
    } else {
        display = "Desktop";
    }

    return display;
}

function findData() {
    const complete_date = new Date();
    let date = complete_date.toLocaleDateString();
    date = date.split("/");
    date = date.reverse();
    const year = date[0];
    const month = date[1];
    const day = date[2];
    const time = complete_date.toLocaleTimeString();
    const formated_date = `${year}-${month}-${day} ${time}`;

    return formated_date;
}

function findUrl() {
    const url = window.location.href;

    return url;
}