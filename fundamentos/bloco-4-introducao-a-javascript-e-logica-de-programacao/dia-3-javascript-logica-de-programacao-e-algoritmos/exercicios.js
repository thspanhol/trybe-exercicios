//1

// let fatorial = 1;
// let mult;

// for (index = 10; index > 1; index -= 1) {
//     mult = fatorial * index 
//     fatorial = mult
// }
// console.log(fatorial);

//2

// let word = "tryber";
// let drow = "";
// for (index = word.length -1; index >= 0; index -= 1) {
//     drow = drow.concat(word[index])
// }
// console.log(drow);

//3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = "tttttttttttttt";
let maior = "";

// for (index = array.length -1; index >= 0; index -=1) {
//     if (array[index] < menor) {
//         menor = array[index]
//     }
// }
// console.log(menor);

//4

for (index = array.length -1; index >= 0; index -=1) {
    if (array[index] > maior) {
        maior = array[index]
    }
}
console.log(maior);

//5

// let primo = 0;

// for (index = 0; index <= 50; index +=1) {
//     if (index % 2 != 0 && index % 3 != 0 && index % 5 != 0 && index % 7 != 0) {
//         primo = index
//     }
// }
// console.log(primo);