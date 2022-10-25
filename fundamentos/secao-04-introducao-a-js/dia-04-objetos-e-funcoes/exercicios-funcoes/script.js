// Exercicio 1
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function checkPalindrome (word) {
    let reversedWord = word.split('').reverse().join('');
    let isPalindrome = true;

    if (word == reversedWord) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;
}

console.log(checkPalindrome('tenet'));


// Exercicio 2
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

// function biggerNumber (array) {
//     let counter = 0;

//     for (let i in array) {
//         if (array[counter] < array[i]) {
//             counter = i;
//         } else {
//             counter = counter
//         } 
//     }

//     return counter
// }

// console.log(biggerNumber([5, 2, 3, 74, 9]))


// Exercicio 3
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function smallerNumber (array) {
    let counter = 0;
    for (let i in array) {
        if (array[counter] > array[i]) {
            counter = i;
        } else {
            counter = counter;
        }
    }
    return counter;
}

console.log(smallerNumber([5, 2, 3, 1, 9]))


// Exercicio 4
// Exercicio 5
// Exercicio 6
// Exercicio 7
// Exercicio 8