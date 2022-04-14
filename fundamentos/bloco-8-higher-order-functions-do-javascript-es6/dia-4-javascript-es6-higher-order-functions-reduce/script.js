const pessoas = [
    {nome: 'Thales', id: 25},
    {nome: 'Spanhol', id: 54},
    {nome: 'De', id: 78},
    {nome: 'Barros', id: 06},
    {nome: 'Mika', id: 98},
    {nome: 'Fick', id: 87},
    {nome: 'Pacheco', id: 22},
]

const teste = pessoas.reduce((par1, par2) => par1 + par2.id, 0 );

console.log(teste);