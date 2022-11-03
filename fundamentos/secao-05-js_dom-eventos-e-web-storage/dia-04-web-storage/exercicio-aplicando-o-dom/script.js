const backgroundColorList = document.querySelector('#background-color').children;
const fontColorList = document.querySelector('#font-color').children;
const fontSizeList = document.querySelector('#font-size').children;
const lineHeightList = document.querySelector('#line-height').children;
const fontFamilyList = document.querySelector('#font-family').children;

const text = document.querySelector('#text');

// Cor de fundo da tela;
const coloringScreen = ({target}) => {
    const body = document.getElementsByTagName('body')[0];
    body.style.background = target.innerText;
}   

for (let item of backgroundColorList) {
    item.addEventListener('click', coloringScreen)
}

// Cor do texto;
const changeTextColor = ({target}) => {
    const textContainer = document.querySelector('#text-container')
    textContainer.style.color = target.innerText;
}   

for (let item of fontColorList) {
    item.addEventListener('click', changeTextColor)
}

// Tamanho da fonte;
const changeFontSize = ({target}) => {
    text.style.fontSize = target.innerText;
}   

for (let item of fontSizeList) {
    item.addEventListener('click', changeFontSize)
}

// Espaçamento entre as linhas do texto;
const changeLineHeight = ({target}) => {
    text.style.lineHeight = target.innerText;
}   

for (let item of lineHeightList) {
    item.addEventListener('click', changeLineHeight)
}

// Tipo da fonte (Font family).