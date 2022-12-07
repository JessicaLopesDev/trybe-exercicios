// Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const splittedNames = names.toString().toLowerCase().split('');
//array names transformado em array de letras

const countA = (array) => {
  return array
    .reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);
}

console.log(countA(splittedNames));