const dia = () => 'Acordando!!'

const caf = () => 'Bora tomar café!!'

const noi = () => 'Partiu dormir!!'

const doingThing = (par) => console.log(par());

doingThing(dia)
doingThing(caf)
doingThing(noi)

////////////////////////////////////////////////

let funcionarios = [];

const pessoaNova = (par) => {
    let low = par.toLowerCase();
    let novo = {
        nome: par,
        email: `${low.replace(/ /g, "_")}@trybe.com`
    }
    funcionarios.push(novo) ;
}

pessoaNova('Thales Spanhol')
pessoaNova('Mikaela Fick')
pessoaNova('Ta Eo Kaelzinho')

console.log(funcionarios);

////////////////////////////////////////////////

const sorteio = () => {return Math.floor( Math.random() * 5 + 1  ) }

const confere = (par) => {
    let num = sorteio();
    if (par == num) {
        return 'Parabéns Você ganhou'
    } else {
        return 'Tente novamente'
    }
}

console.log(confere(4));

////////////////////////////////////////////////

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifica = (par1, par2) => {
    let res = 0;
    for( i=0; i <= par1.length; i+=1){
        if (par2[i] === 'N.A') {
            res = res + 0
        } else if (par1[i] == par2[i]){
            res += 1
        } else if (par1[i] != par2[i]){
            res = res - 0.5
        }
    }
    return res
}

console.log( verifica(STUDENT_ANSWERS, RIGHT_ANSWERS) );
