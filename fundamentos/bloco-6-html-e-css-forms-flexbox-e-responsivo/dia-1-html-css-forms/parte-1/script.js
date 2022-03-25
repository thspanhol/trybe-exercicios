// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nadaAcon(event) {
    event.preventDefault()
}

function nadaAcona(event) {
    if (event.key != "a") {
        event.preventDefault()
    }
}

HREF_LINK.addEventListener("click", nadaAcon);
INPUT_CHECKBOX.addEventListener("click", nadaAcon);

INPUT_TEXT.addEventListener("keypress", nadaAcona);