let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1

// for (index = 0; index < numbers.length; index+=1) {
//     console.log(numbers[index]);
// }

//2

let soma = 0;
let media = soma / numbers.length ;

// for (index = 0; index < numbers.length; index+=1) {
//     soma += (numbers[index]);
   
// } 
//     console.log(soma);

// //3

//     console.log(soma / numbers.length);

// //4

// if (media <= 20) {
//     console.log("valor menor ou igual a 20");
// }
// else if (media > 20) {
//     console.log("valor maior que 20");
// }

//5

// let maior = 0;

// for (index = 0; index < numbers.length; index +=1) {

//     if (maior >= numbers[index]) {

//     }
//     else if (maior < numbers[index]) {
//         maior = numbers[index]
//     }
// }
//     console.log(maior);

//6

// let impares = [];

// for (index = 0; index < numbers.length; index +=1) {

//     if (numbers[index] % 2 != 0) {
//         impares.push(numbers[index])
//     }  
// }
// console.log(impares.length);

//7

// let menor = 9999999999999999999999999999999;

// for (index = 0; index < numbers.length; index +=1) {

//     if (menor <= numbers[index]) {

//     }
//     else if (menor > numbers[index]) {
//         menor = numbers[index]
//     }
// }
//     console.log(menor);

//8

let numeros = [];

for (index = 1; index <= 25; index += 1) {
    numeros.push(index)
}

console.log(numeros);

//9

let divisao = [];

for (index = 0; index < numeros.length; index += 1) {
    divisao.push(numeros[index] / 2)
}

console.log(divisao);