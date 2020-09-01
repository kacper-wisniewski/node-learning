//console.log('Hello World');

const os = require('os');
const fs = require('fs');

//console.log(os);

//console.log('Platform', os.platform());
//console.log('Arch', os.arch());
//console.log('User', os.userInfo());

const maleName = [
  'Liam',
  'Noah',
  'William',
  'James',
  'Oliver',
  'Benjamin',
  'Elijah',
  'Lucas',
  'Mason',
  'Logan',
  'Alexander',
  'Ethan',
  'Jacob',
  'Michael',
  'Daniel',
  'Henry',
  'Jackson',
  'Sebastian',
  'Aiden',
  'Matthew'
];

const femaleName = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Charlotte',
  'Mia',
  'Amelia',
  'Harper',
  'Evelyn',
  'Abigail',
  'Emily',
  'Elizabeth',
  'Mila',
  'Ella',
  'Avery',
  'Sofia',
  'Camila',
  'Aria',
  'Scarlett',
];

const lastName = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'Martin',
];

let generatedPerson = {
  gender: '',
  firstName: '',
  lastName: '',
  age: '',
  phone: '',
  email: '',
}

const generate = [
  Math.floor(Math.random() * 2),
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20),
  Math.floor((Math.random() * 60)+19),
];

if(generate[0] == 0) {
  generatedPerson.gender = 'Male';
  generatedPerson.firstName = maleName[generate[1]];
} else {
  generatedPerson.gender = 'Female';
  generatedPerson.firstName = femaleName[generate[1]];
}
generatedPerson.lastName = lastName[generate[2]];
generatedPerson.age = generate[3];
generatedPerson.email = `${generatedPerson.firstName}.${generatedPerson.lastName}@gmail.com`;
generatedPerson.email = generatedPerson.email.toLowerCase();

let generateNumber;

for (let i = 0; i < 9; i++) {
  generateNumber = Math.floor((Math.random() * 9)+1);

  generatedPerson.phone += `${generateNumber}`;
  if((i+1)%3 == 0 && (i+1) < 9) {
    generatedPerson.phone += ' ';
  }
}

console.log(generatedPerson);