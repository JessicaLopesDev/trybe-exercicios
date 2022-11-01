
// Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVoceEsta.parentElement.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelectorAll('section #primeiroFilhoDoFilho')[0].innerHTML = 'Primeiro filho do filho';

// Acesse o primeiroFilho a partir de pai.
let pai = document.querySelector('#pai');
console.log(pai);
pai.firstElementChild.style.color = 'blue';

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling.nextSibling);


// Agora acesse o terceiroFilho a partir de pai.
console.log(pai.children[2]);