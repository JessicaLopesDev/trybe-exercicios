


const createHolidaysButton = (name) => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidaysButton = document.createElement('button');
  holidaysButton.innerHTML = name;
  holidaysButton.id = 'btn-holiday';

  buttonsContainer.appendChild(holidaysButton);
}
createHolidaysButton('Feriados');


const createDaysOfMonth = () => {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDays = document.querySelector('#days');
  
  for (let item of decemberDaysList) {
    const dayItem = document.createElement('li');
    let days = item;
    dayItem.innerHTML = days;

    if (days === 25) {
      dayItem.className = 'friday holiday day'
    }
    else if (days === 24 || days === 31) {
      dayItem.className = 'holiday day'
    } 
    else if (days === 4 || days === 11 || days === 18) {
      dayItem.className = 'friday day'
    }
    else {
      dayItem.className = 'day';
    }

    monthDays.appendChild(dayItem);
  }
}

const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };

  createDaysOfMonth();
}

window.onload = createDaysOfTheWeek;

const holidayButton = document.querySelector('#btn-holiday');
console.log(holidayButton)


const changeBackgroundHolidays = () => {
  const holidays = document.querySelectorAll('.holiday');
  
  for (let item of holidays) {
    if (item.style.background === 'red') {
      item.style.background = 'rgb(238,238,238)'
    } else {
      item.style.background = 'red';
    }
  }
}
holidayButton.addEventListener('click', changeBackgroundHolidays)



// Escreva seu código abaixo.





