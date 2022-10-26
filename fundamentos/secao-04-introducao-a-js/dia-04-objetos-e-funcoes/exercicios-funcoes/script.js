// Exercicio 1
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function checkPalindrome (word) {
//     let reversedWord = word.split('').reverse().join('');
//     let isPalindrome = true;

//     if (word == reversedWord) {
//         isPalindrome = true;
//     } else {
//         isPalindrome = false;
//     }

//     return isPalindrome;
// }

// console.log(checkPalindrome('tenet'));


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

// function smallerNumber (array) {
//     let counter = 0;
//     for (let i in array) {
//         if (array[counter] > array[i]) {
//             counter = i;
//         } else {
//             counter = counter;
//         }
//     }
//     return counter;
// }

// console.log(smallerNumber([5, 2, 3, 1, 9]))


// Exercicio 4
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

// function biggerName (array) {
//     let counter = array[0];
//     for (let name in array) {
//         if (counter.length < array[name].length) {
//             counter = array[name];
//         } else {
//             counter = counter;
//         }
//     }
//     return counter;
// }

// console.log(biggerName(['Fernanda', 'Lucas', 'Nádia']))


// Exercicio 5
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

// function mostRepeated(array) {
//     let outQuantity = 0;
//     let response = 0;
    
//     for (let item of array) {
//         let repeater = item;
//         let inQuantity = 0;
        
//         for (let item of array) {
//             if (repeater === item) {
//                 inQuantity += 1;
//             }
//         }

//         if (inQuantity > outQuantity || repeater > response) {
//             outQuantity = inQuantity;
//             response = repeater;
//         }
//     }

//     return response
// }

// console.log('result: ', mostRepeated([4, 9, 8, 3, 3, 2, 9, 9, 2]))

// Exercicio 6
// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// const sum = (number) => {
//     let counter = 0;

//     for (let i = 0; i <= number; i++) {
//         counter = counter + i;
//     }
//     return counter;
// }

// console.log(sum(2))

// Exercicio 7
// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

const endWord = (word, ending) => {
    let separatedWord = word.split('').reverse();
    let separatedEnding = ending.split('').reverse();
    let result = false;

    if (word.length <= ending.length) {
        console.log('A primeira palavra precisa ser maior que a segunda palavra.');
        return result;
    }

    for (let i = 0; i <= separatedEnding.length; i++) {
        if (separatedEnding[i] === separatedWord[i]) {
            result = true;
        }
    }
    return result;
}

console.log(endWord('jessica', 'ess'));