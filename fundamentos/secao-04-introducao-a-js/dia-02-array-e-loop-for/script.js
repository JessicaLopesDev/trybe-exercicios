let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let initial = 0

// Exercicio 1
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }


// Exercicio 2
// for (let index = 0; index < numbers.length; index++) {
//     initial += numbers[index]
// }
// console.log(initial)


// Exercicio 3
// for (let index = 0; index < numbers.length; index++) {
//     initial += numbers[index]
// }

// const result = initial / numbers.length;
// // console.log(result);


// // Exercicio 4
// if (result > 20) {
//     console.log("Valor maior que 20: ", result)
// } else {
//     console.log("Valor menor que 20: ", result)
// }


// Exercicio 5 (maior numero do array)
// let higher = numbers[0]

// for (let index = 1; index < numbers.length; index++) {
//   if (numbers[index] > higher) {
//     higher = numbers[index];
//   }
// }
// console.log(higher);


// Exercicio 6 (quantos valores impares)
let odd = 0

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    odd += 1
  }
}

if (odd === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log(odd);
}


// Exercicio 1
// Exercicio 1
// Exercicio 1
// Exercicio 1
