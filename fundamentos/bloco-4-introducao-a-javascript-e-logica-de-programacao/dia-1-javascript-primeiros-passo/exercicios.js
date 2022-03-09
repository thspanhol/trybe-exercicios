const a = 4 ;
const b = 3 ;
const c = 7 ;

//1

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//2

if ( b > a ) {
    console.log(b);
}
else if (a > b ) {
    console.log(a);
}

//3


if ( a > b && a > c ) {
    console.log(a);
}
else if  (b > a && b > c ) {
    console.log(b);
}
else if ( c > b && c > a ) {
    console.log(c);
}

//4

const valor = 14 ;

if (valor == 14) {
    console.log("positive");
}
else if (valor != 14 ) {
    console.log("negative");
}
else {
    console.log("zero");
}

//5

const tri = 40;
const ang = 60;
const ulo = 80;

if ( tri + ang + ulo == 180 ) {
    console.log(true);
}
else if ( tri + ang + ulo != 180 ) {
    console.log(false);
}
else {
    console.log("erro");
}

//7

const nota = 70 ;

if (nota < 0 || nota > 100) {
    console.log("Erro");
}
else if (nota >= 90) {
    console.log("A");
}
else if (nota >= 80) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >= 60) {
    console.log("D");
}
else if (nota >= 50) {
    console.log("E");
}
else if (nota < 50) {
    console.log("F");
}

//8

const num1 = 30 ;
const num2 = 40 ;
const num3 = 70 ;

if ( num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0 ) {
    console.log(true);
}
else if ( num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 != 0 ){
    console.log(false);
}

//9

if ( num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0 ) {
    console.log(true);
}
else if ( num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0 ){
    console.log(false);
}

//10

const custo = 100;
const venda = 300;
const imposto = 20;
const lucro = venda - custo - imposto
console.log(lucro * 1000);