function disabilita(event) {
    event.preventDefault()
}
document.getElementById("btn").addEventListener("click", disabilita);

document.getElementById("limpa").addEventListener("click", apaga);

let inps = document.getElementsByTagName("input");

function apaga() {
    for (i = 0; i < inps.length; i +=1){
        inps[i].value = ""
    }
    for (i = 0; i < inps.length; i +=1){
        inps[i].checked = 0
    }
    document.getElementById("texto").value = ""
}