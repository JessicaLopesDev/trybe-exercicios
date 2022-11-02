
const createFridaysButton = (name) => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const fridaysButton = document.createElement('button');
  fridaysButton.innerHTML = name;
  fridaysButton.id = 'btn-friday';

  buttonsContainer.appendChild(fridaysButton);
}
createFridaysButton('Sexta-feira');

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
createDaysOfMonth();

const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };

}

const holidayButton = document.querySelector('#btn-holiday');

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
holidayButton.addEventListener('click', changeBackgroundHolidays);

const fridayButton = document.querySelector('#btn-friday')

const changeTextFridays = () => {
  const fridays = document.querySelectorAll('.friday');
  
  for (let item of fridays) {
    if (item.style.fontWeight === '800') {
      item.style.fontWeight = '400'
    } else {
      item.style.fontWeight = '800';
    }
  }
}
fridayButton.addEventListener('click', changeTextFridays);

const moreZoom = (event) => {
  event.target.style.fontSize = '26px'
}

const lessZoom = (event) => {
  event.target.style.fontSize = '20px'
}

const monthDays = document.querySelectorAll('.day');

for (let item of monthDays) {
  item.addEventListener('mouseover', moreZoom);
  item.addEventListener('mouseout', lessZoom);
}

const taskContainer = document.querySelector('.my-tasks');

const addTask = (task) => {
  let newTask = document.createElement('span');
  newTask.innerHTML = task;
  
  taskContainer.appendChild(newTask);
}

addTask('Projeto');

const addColor = (color) => {
  const colorTaskDiv = document.createElement('div');
  colorTaskDiv.className = 'task';
  colorTaskDiv.style.background = color;

  taskContainer.appendChild(colorTaskDiv);
}

addColor('purple');

const colorTaskDiv = document.querySelector('.task');

const selectTask = (event) => {

  if (event.target.className === 'task selected') {
    event.target.className = 'task';
  } else {
    event.target.className = 'task selected'
  }
}

colorTaskDiv.addEventListener('click', selectTask)

let daysContainer = document.getElementById('days');
let selectedTask = document.getElementsByClassName('task selected');
let taskColor = colorTaskDiv.style.background;

const coloringDays = (event) => {
  let selectedColor = event.target.style.color;

  if (selectedTask.length > 0 && selectedColor !== taskColor) {
    let color = selectedTask[0].style.background;
    event.target.style.color = color;
  } else if (selectedColor === taskColor) {
    event.target.style.color = 'rgb(119,119,119'
  }
    
}

daysContainer.addEventListener('click', coloringDays);


const buttonAddTask = document.querySelector('#btn-add');

const addCommitment = (event) => {
  const input = document.querySelector('#task-input');
  const commitmentList = document.querySelector('.task-list');

  if (!input.value.length) {
    alert('Erro! Você precisa digitar um compromisso');
    return;
  } 
  const newCommitment = document.createElement('li');
  newCommitment.innerText = input.value;
  commitmentList.appendChild(newCommitment);
  input.value = '';
}

// console.log(commitmentList)
buttonAddTask.addEventListener('click', addCommitment);
document.addEventListener('keypress', (event) => {
  event.key === 'Enter' && addCommitment();
});


window.onload = createDaysOfTheWeek;

// Escreva seu código abaixo.





