const backgroundColorList = document.querySelector('#background-color').children;
const fontColorList = document.querySelector('#font-color').children;
const fontSizeList = document.querySelector('#font-size').children;
const lineHeightList = document.querySelector('#line-height').children;
const fontFamilyList = document.querySelector('#font-family').children;
const text = document.querySelector('#text');
const body = document.getElementsByTagName('body')[0];
const textContainer = document.querySelector('#text-container')


const settingStorage = (key, value) => {
    const styleValues = JSON.parse(localStorage.getItem('@styleValues'));

    if (styleValues) {
        localStorage.setItem('@styleValues', JSON.stringify({
            ...styleValues,
            [key]: value
        }));
    } else {
        localStorage.setItem('@styleValues', JSON.stringify({
            [key]: value
        }));
    } 
}


// Cor de fundo da tela;
const coloringScreen = ({target}) => {
    body.style.background = target.innerText;

    settingStorage('backgroundColor', target.innerText);
}   

for (let item of backgroundColorList) {
    item.addEventListener('click', coloringScreen)
}

// Cor do texto;
const changeTextColor = ({target}) => {
    textContainer.style.color = target.innerText;

    settingStorage('textColor', target.innerText);
}   

for (let item of fontColorList) {
    item.addEventListener('click', changeTextColor)
}

// Tamanho da fonte;
const changeFontSize = ({target}) => {
    text.style.fontSize = target.innerText;

    settingStorage('fontSize', target.innerText);
}   

for (let item of fontSizeList) {
    item.addEventListener('click', changeFontSize)
}

// Espaçamento entre as linhas do texto;
const changeLineHeight = ({target}) => {
    text.style.lineHeight = target.innerText;

    settingStorage('lineHeight', target.innerText);
}   

for (let item of lineHeightList) {
    item.addEventListener('click', changeLineHeight)
}

// Tipo da fonte (Font family).
const changeFontFamily = ({target}) => {
    text.style.fontFamily = target.innerText;

    settingStorage('fontFamily', target.innerText);
}   

for (let item of fontFamilyList) {
    item.addEventListener('click', changeFontFamily)
}

const setConfigurationsStorage = () => {
    const styleValues = JSON.parse(localStorage.getItem('@styleValues'));
    
    if (styleValues) {
        body.style.background = styleValues.backgroundColor;
        textContainer.style.color = styleValues.textColor;
        text.style.fontSize = styleValues.fontSize;
        text.style.lineHeight = styleValues.lineHeight;
        text.style.fontFamily = styleValues.fontFamily;
    }
}

window.onload = setConfigurationsStorage