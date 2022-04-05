const thales = {
    nome: "Thales",
    idade: 25
}

function addSob(p1, p2, p3) {
    p1[`${p2}`] = p3;
}

addSob(thales, 'sobrenome', 'Spanhol')

addSob(thales, 'camisa', 'M')

console.log(thales);
console.log(Object.keys(thales));
console.log(Object.values(thales));
console.log(Object.entries(thales));

const outroThales = Object.assign({},thales);

console.log(outroThales);