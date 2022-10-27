// 🚀 Exercício 3 - BONUS
// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. 
// Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia'
];

const messageObject = (object) => {
    let initial = [];
    const keysObject = Object.keys(object);
    const valuessObject = Object.values(object);

    for (let i = 0; i < keysObject.length; i++) {
        initial.push(`${valuessObject[i]} ${keysObject[i]}s`);
    }
    return `Sua cesta possui: ${initial.join(', ')}.`;
}

const equalFruitQuantity = (currentWord, array) => {
    let counter = 0;

    for (let i of array) {
        if (currentWord === i) {
            counter = counter + 1;
        }
    }
    return counter;
}

const basketFruitResult = (array) => {
    let initial = {};

    for (let i = 0; i < array.length; i++) {
        initial = {
            ...initial,
            [array[i]]: equalFruitQuantity(array[i], array)
        }
    }
    return messageObject(initial);
}

console.log(basketFruitResult(basket));