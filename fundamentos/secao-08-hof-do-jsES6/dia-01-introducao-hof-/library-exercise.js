const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1921,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const expectedResult = 'Stephen King';
const authorBornIn1947 = (array) => {
  return array.find(item => item.author.birthYear === 1947).author.name;
}
// console.log(authorBornIn1947(books));


// const expectedResult = 'Duna';
const smallerName = (array) => {
  let nameBook;

  array.forEach(item => {
    if (!nameBook || item.name.length < nameBook.length) {
      nameBook = item.name;
    };
  });
  return nameBook;
}
// console.log(smallerName(books));


// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };
const getNamedBook = (array) => {
  return array.find(item => item.name.length === 26);
}
// console.log(getNamedBook(books));


const expectedResult = false;
function everyoneWasBornOnSecXX(array) {  
  return array.every(item => item.author.birthYear >= 1901 && item.author.birthYear <= 2000);
}
// console.log(everyoneWasBornOnSecXX(books));


// const expectedResult = true;
const someBookWasReleaseOnThe80s = (array) => {
  return array.some(item => item.releaseYear > 1980 && item.releaseYear < 1989);
}
// console.log(someBookWasReleaseOnThe80s(books));


// const expectedResult = false;
function authorUnique(array) {
  let firstBirthYear = 1;
  
  array.forEach((item) => {
    if (!!firstBirthYear && item.author.birthYear !== firstBirthYear) {
      firstBirthYear = item.author.birthYear
    } else {
      firstBirthYear = 0;
    }
  })

  return !!firstBirthYear;
}

console.log(authorUnique(books));
