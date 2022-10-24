// Exercício 1
// let factorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let counter = 1;

// for (let index = 0; index < factorial.length; index++) {
//     counter = counter * factorial[index];
// }
// console.log(counter);


// Exercício 2
// let word = 'Jéssica';
// let separatedWord = word.split('').reverse();
// let invertedWord = '';


// for (let index = 0; index < separatedWord.length; index++) {
//     invertedWord = invertedWord + separatedWord[index];
// }

// console.log(invertedWord);


// Exercício 3 
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = array[0]

// Retorne a maior palavra
// for (let index = 1; index < array.length; index++) {

//     if (bigger.length > array[index].length) {
//         bigger = bigger
        
//     } else {
//         bigger = array[index];
//     }
    
// }
// console.log(bigger)



// Retorne a menor palavra
// let smallest = array[0];

// for (let index = 1; index < array.length; index++) {

//     if (smallest.length < array[index].length) {
//         smallest = smallest
        
//     } else {
//         smallest = array[index];
//     }
    
// }
// console.log(smallest)


// Exercício 4

// let numbers = 1;
let cousinNumbers = 0;
for (let counter = 2; counter <= 50; counter++) {
    let isPrime = true;

    for (let index = 2; index < counter; index++) {
        if(counter % index == 0) {
            isPrime = false;
        } 
    }
    if (isPrime) {
        cousinNumbers = counter;
    }
}

console.log(cousinNumbers);

