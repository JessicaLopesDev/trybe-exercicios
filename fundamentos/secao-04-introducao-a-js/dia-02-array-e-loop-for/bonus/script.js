let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }



// Exercício 1
// numbers.sort((a,b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
//   return 0;
// });
// console.log(numbers);


// Exercício 2
// numbers.sort((a,b) => {
//   if(a < b) return 1;
//   if(a > b) return -1;
//   return 0;
// });
// console.log(numbers);

// const n = 5;

// let resultado = 0;
// for (let index = 0; index <= n; index += 1) {
//   resultado += index;
// };
// console.log(resultado)


let element = 100
let quantity = 0

for (let index = 0; element > 0; index++) {
  element -= 5
  quantity = quantity +1
  console.log("element: ", element)
  console.log("quantity: ", quantity)
  console.log("index: ", index)
  
}
