const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  let mpe = grades[0].reduce((par1, par2) => par1 + par2) / grades[0].length;
  let mmi = grades[1].reduce((par1, par2) => par1 + par2) / grades[1].length;
  let mma = grades[2].reduce((par1, par2) => par1 + par2) / grades[2].length;
  let medias = [mpe, mmi, mma];
  return [
      {name: students[0], average: medias[0]},
      {name: students[1], average: medias[1]},
      {name: students[2], average: medias[2]},
  ]
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];