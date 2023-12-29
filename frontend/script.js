const tableBody = document.querySelector('.table-body');
const form = document.querySelector('.form');

const listOfStudents = [
  {
    name: 'Алексей',
    lastName: 'Свистунов',
    patronym: 'Евгеньевич',
    birthday: new Date(2004, 4, 30),
    faculty: 'Инф. системы и технологии',
    startYear: 2022,
  },

  {
    name: 'Павел',
    lastName: 'Символоков',
    patronym: 'Евгеньевич',
    birthday: new Date(2004, 3, 12),
    faculty: 'Инф. системы и технологии',
    startYear: 2022,
  },

  {
    name: 'Сергей',
    lastName: 'Водопьянов',
    patronym: 'Эдуардович',
    birthday: new Date(2003, 10, 18),
    faculty: 'Прикладная информатика и математика',
    startYear: 2021,
  },
]


function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}


function render(obj) {
  for(student of obj) {
    const row = document.createElement('tr');  
    const fullName = document.createElement('td');
    const birthday = document.createElement('td');
    const faculty = document.createElement('td');
    const startYear = document.createElement('td');

    fullName.classList.add('fullname');
    birthday.classList.add('birthday');
    faculty.classList.add('faculty');
    startYear.classList.add('startyear')

    fullName.textContent = student.name + " " + student.lastName +  " " + student.patronym;
    birthday.textContent = formatDate(student.birthday);
    faculty.textContent = student.faculty;
    startYear.textContent = student.startYear;

    row.append(fullName);
    row.append(birthday);
    row.append(faculty);
    row.append(startYear);

    tableBody.append(row);
  }
}

render(listOfStudents);

const inputName = document.querySelector('.input__name');
const inputLastName = document.querySelector('.input__lastname');
const inputPatronym = document.querySelector('.input__patronym');
const inputBirthday = document.querySelector('.input__birthday');
const inputFaculty = document.querySelector('.input__faculty');
const inputStartYear = document.querySelector('.input__startyear');
const buttonSumbit = document.querySelector('.button-submit');



function validateForm(form) {

  function createErorr(input) {
    input.classList.add('input-error');
  }

  function removeError(input) {
    if(input.classList.contains('input-error')) {
      input.classList.remove('input-error');
    }
  }

  let currentCondition = true;
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    removeError(input);
    if(input.value === '' || input.value === ' ') {
      currentCondition = false;
      createErorr(input);
    }

  });

  return currentCondition;
 
  
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const validation = validateForm(this);
  if(validation) {
    console.log('Успех!!');
    const fieldObj = {
      name: inputName.value,
      lastName: inputLastName.value,
      patronym: inputPatronym.value,
      birthday: new Date(inputBirthday.value),
      faculty: inputFaculty.value,
      startYear: inputStartYear.value,
    }
  
    tableBody.innerHTML = '';
    listOfStudents.push(fieldObj);
    render(listOfStudents);
  }
 
});


//сортировка, фильтрация, валидация
//работа с классами
//разобрать date
//дополнить валидацию
