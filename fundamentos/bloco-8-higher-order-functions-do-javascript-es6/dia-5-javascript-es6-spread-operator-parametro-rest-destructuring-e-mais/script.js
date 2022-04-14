// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'maçã', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['laranja', 'kiwi', 'manga'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));

//////////////////////////////////////////

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const tudo = {...user, ...jobInfos};

//   console.log(tudo);

  const frase = ({ name, age, nationality, profession, squadInitials, squad }) => {
    console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
  };
  
  frase(tudo);

  //////////////////////////////////////////

  const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
  const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
  
  console.log(firstCountry); // Brazil
  console.log(secondCountry); // Japan
  console.log(thirdCountry); // China
  console.log(fourthCountry); // Canada

   //////////////////////////////////////////

   const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

   //////////////////////////////////////////

   const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));

     //////////////////////////////////////////

     const multiply = (number = 1, value = 1) => {
        return number * value;
      };
      
      console.log(multiply(7));