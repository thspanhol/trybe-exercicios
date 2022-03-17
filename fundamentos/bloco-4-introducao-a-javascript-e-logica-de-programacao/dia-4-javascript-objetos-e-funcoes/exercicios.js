//OBJETOS E FOR/IN

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "sim",
//   };

//   let tio = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: "sim",
//   };

//   //1

//   console.log("bem-vinda, " + info.personagem);

//   //2

//   console.log(info);

//   //3

//   for (let mg in info) {
//       console.log(mg);
//   }

//   //4

//   for (let mh in info) {
//       console.log(info[mh]);
//   }

//5

// let atio = []
// let amar = []

// for (let i in info){
//     amar.push(info[i])
// }
// for (let n in tio){
//     atio.push(tio[n])
// }

// for (i = 0; i <= 3; i +=1) {
//     if (amar[i] != atio[i])
//     console.log(amar[i] + " e " + atio[i]);
//     else {
//         console.log("Ambos recorrentes");
//     }
// }
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//       {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       },
//     ],
//   };

//   //6

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0]["titulo"] );

//   //8

//   console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos" );

//FUNÇÕES

//2

// function retmaior(params) {
//     let maior = 0;
//     for (i=0; i<=params.length; i +=1)
//     if (params[i] > maior) {
//         maior = i
//     }
//         console.log(maior);
// }

// retmaior([2, 3, 6, 7, 10, 1])

//3

// function retmenor(params) {
//     let menor = 999999999999999999999999999;
//     for (i=0; i<=params.length; i +=1)
//     if (params[i] < menor) {
//         menor = i
//     }
//         console.log(menor);
// }

// retmenor([2, 4, 6, 7, 10, 0, -3])

//1

// function palin ( param ) {
//     let array = param.split("");
//     let reverte = param.split("").reverse();
//     let aux = 0
//     console.log(array);
//     console.log(reverte);
//     for (i=0; i <= array.length; i +=1){
//     if ( array[i] === reverte[i]) {
//         aux = aux+1;
//     }
// }
//     console.log(aux);
//     console.log(array.length +1);
//     if (aux === array.length +1) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
//   }

//   palin("thales")

// essa última função é a definitiva
// function palin(param) {
//   let array = param.split("");
//   let reverte = param.split("").reverse();
//   let aux = 0;
//   for (i = 0; i <= array.length; i += 1) {
//     if (array[i] === reverte[i]) {
//       aux = aux + 1;
//     }
//   }
//   if (aux === array.length + 1) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// palin("thales");

//4

// let ativ4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiornome (param) {
//     let nome = ""
//     for ( i = 0; i <= param.length -1; i +=1) {
//         if (param[i].length > nome.length) {
//             nome = param[i];
//         }
//     }
//     console.log(nome);
// }
// maiornome(ativ4)

//5

let ativ5 = [2, 3, 2, 5, 8, 2, 3];

let aux = 0;

function vezesrepete(array, num) {
    let xua = 0;
    for (let th of array) {
        if (th === num) {
            xua = xua +=1
        }
    }
    if( xua > aux){
        aux = xua;
    }
    console.log(aux);
}

vezesrepete(ativ5, 2)

function maisrepete(array) {
    let ttt = 0;
    let hhh = 0;
    for (i = 0; i > array.length; i +=1){
        if (vezesrepete(array, array[i]) > ttt){
            ttt = vezesrepete(array, array[i]) && hhh = array[i]
        }
        console.log(ttt);
        console.log(hhh);
    }
}

maisrepete(ativ5)



















//6

// function somatorio(n) {
//     let aux = 0;
//     for (i = 1; i <= n; i +=1) {
//         aux = aux+i
//     }
//     console.log(aux);
// }

// somatorio(7)

//7

// function verifica(par1, par2){
//     let aux = par1.length - par2.length;
//     if ( par1.substring(aux) === par2) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// verifica("trybe", "be")