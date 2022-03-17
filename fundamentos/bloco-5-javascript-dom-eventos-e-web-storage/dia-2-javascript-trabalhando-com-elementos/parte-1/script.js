// console.log( document.getElementById("elementoOndeVoceEsta") );

document.getElementById("elementoOndeVoceEsta").parentNode.parentNode.style.color = "red";

document.getElementById("primeiroFilhoDoFilho").innerText = "Primeiro Filho do Filho"

// console.log(document.getElementById("pai").firstElementChild);

// console.log(document.getElementById("elementoOndeVoceEsta").nextSibling );

// console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling );

// console.log(document.getElementById("pai").lastElementChild.previousElementSibling );

let irmao1 = document.createElement("p")

// console.log(irmao1);
document.getElementById("pai").appendChild(irmao1)
// console.log( document.getElementById("pai") );

document.getElementById("elementoOndeVoceEsta").appendChild(irmao1)

// console.log(document.getElementById("elementoOndeVoceEsta"));

document.getElementById("primeiroFilhoDoFilho").appendChild(irmao1)

// console.log( document.getElementById("primeiroFilhoDoFilho").firstElementChild );

let primeiroNetoDoFilho = document.getElementById("primeiroFilhoDoFilho").firstElementChild;

// console.log( primeiroNetoDoFilho.parentElement.parentElement.nextElementSibling );

let rem1 = document.getElementById("terceiroFilho");
let rem2 = document.getElementById("quartoEUltimoFilho");
let rem3 = document.getElementById("segundoEUltimoFilhoDoFilho");

document.getElementById("pai").removeChild(rem1);
document.getElementById("pai").removeChild(rem2);
document.getElementById("elementoOndeVoceEsta").removeChild(rem3);



console.log( document.getElementById("pai").children );
console.log( document.getElementById("elementoOndeVoceEsta").children );