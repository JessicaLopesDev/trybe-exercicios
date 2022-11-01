// Crie um irmão para elementoOndeVoceEsta.
let pai = document.querySelector('#pai');

let createBrother = document.createElement('section');

createBrother.id = 'irmaoDoElementoOndeVoceEsta';

pai.appendChild(createBrother);

// Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let createChild = document.createElement('div');

createChild.id = 'filhoDoElementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(createChild);

// Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let createChild2 = document.createElement('div');

createChild2.id = 'filhoDoPrimeiroFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(createChild2);

// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = createChild2.parentElement.parentElement.nextElementSibling
console.log(terceiroFilho)