let paragraphs = document.getElementsByTagName('p');

for (let i in paragraphs) {
    paragraphs[i].className = 'paragraphs'
}

let paragraphsClasses = document.getElementsByClassName('paragraphs');

paragraphsClasses[0].style.color = 'red';

let subtitle = document.getElementsByTagName('h4');

subtitle[0].style.color = 'purple';