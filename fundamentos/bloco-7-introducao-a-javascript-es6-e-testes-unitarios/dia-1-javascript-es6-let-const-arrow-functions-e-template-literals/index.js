// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

const testingScope = (escopo) => {
    escopo === true ? console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo ! o que estou fazendo aqui ? :O`) 
}

  testingScope(false);

//////

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortfunction = (a, b) => {return (a - b)};
console.log(oddsAndEvens.sort(sortfunction));

//////

const fatoral = (n) => {
    let fat = n;
    for (i = n-1; i >= 1; i -= 1){
        fat = fat * i
    } 
    console.log(fat);
}
fatoral(10)

/////

let texto = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const maiorPalavra = (frase) => {
    let separadas = frase.split(" ");
    let maior = "";
    for(i=0; i < separadas.length; i+=1){
        if(maior.length < separadas[i].length){
            maior = separadas[i]
        }
    }
  console.log(maior);
}

maiorPalavra(texto)

/////

const trocar = (params) => {
    let mm = params;
    let zz = "Bebeto"
    let cc = mm.replace(/x/g, zz);
    console.log(cc);
}

trocar("trybe x aqui!")

////

