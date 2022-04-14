const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

///////////////////////

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum(5,10,15,30,40));

//////////////////////

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

  //////////////////////////

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const filterPeople = (par) => {
    let tt = par.reduce((acc, elem) => {
        elem.bornIn >= 1901 && elem.bornIn <= 2000 && elem.nationality == 'Australian'? acc.push(elem.name) : false
        return acc
    }, [])
    return tt
  }

  console.log(filterPeople(people));

  ///////////////////////////

  const myList = [1, 2, 3];

  const swap = (par) => par.reverse();

  console.log(swap(myList));

  ////////////////////////

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (par) => {
    return {
        carro: par[0],
        montadora: par[1],
        ano: par[2]
    }
}

console.log(toObject(palio));

////////////////////////////////////////////

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  const shipLength = (par) => {
      return `${par.name} is ${par.length} ${par.measurementUnit} long`
  }
  
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

  //////////////////////////////////////////

 const greet = (par1, par2 = 'Hi') => {
     return `${par2} ${par1}`
 }

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

/////////////////////////////////////////


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const {spring} = yearSeasons;
  const {summer} = yearSeasons;
  const {autumn} = yearSeasons;
  const {winter} = yearSeasons;
  const meses = [...spring, ...summer, ...autumn, ...winter]

  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);
  meses.push(meses.splice(0,1)[0]);

  console.log(meses);