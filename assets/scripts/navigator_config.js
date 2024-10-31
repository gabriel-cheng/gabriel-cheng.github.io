const userAgent = navigator.userAgent.toLowerCase();
const cards_subcontainer = document.querySelector(".inst_mvv-subcontainer");

function executeScriptForBrowser() {
    if (userAgent.indexOf("safari") > -1 && userAgent.indexOf("chrome") === -1) {
        cards_subcontainer.style = "padding-top: 180px;";
    }
}

executeScriptForBrowser();