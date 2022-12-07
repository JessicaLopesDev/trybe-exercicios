// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = (array) => {
  const splittedNames = array.toString().split('');
  const lowerLetters = splittedNames.map(item => item.toLowerCase());
  return lowerLetters.reduce((acc, curr) => curr === 'a' ? acc + 1 : acc, 0);
}

console.log(countA(names));