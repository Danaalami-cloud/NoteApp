
const updateWater = async (event) => {
  event.preventDefault();
  let water = document.querySelector('#waterIntake').value.trim();
  console.log(water);
  if (water) {
    const response = await fetch(`/dashboard/water/${water}`, {
      method: 'PUT',
      body: JSON.stringify({ water }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace('/dashboard');
    }
  }
}

/* const createCalendar = () => {
  const currDate = new Date();
  // TODO :neeed month to decide the firsst data of the month as a day of the week ; Mon, Tue, Wed ... date module might be handy
  // TODO : from month determines the last week spread
  // TODO : from month determine the first week spread


  const rows = [['1','2', '3', '4', '5', '6', '7'], ['8','9', '10', '11', '12', '13', '14'],['15','16', '17', '18', '19', '20', '21'], ['22','23', '24', '25', '26', '27', '28'], ['29','30','31','1','2','3','4']];
  function createDate (date) {
    // TODO: add Dom creation
    const row = `<div class="first"></div>`;
    const el = `<span><a href='/dashboard/date/${date}' data-notes='2' data-date="03-06-2021">${date}</a></span>`; 
    return el;
  }
  const getClass = (index) => {
    if (index === 0 ) {
      return 'first'
    }
  }
  const weekEl = document.querySelector('.weeks');
  const rowStr =rows.map((row, index) => `<div class=${getClass(index)}}>${row.map(day => createDate(day) ).join('')}</div>`).join('');
  weekEl.innerHTML = rowStr;
}

createCalendar();
window.addEventListener('refresh', createCalendar); */

const updateExercise = async (event) => {
  event.preventDefault();
  let exercise = document.querySelector('#exerciseInput').value.trim();
  console.log(exercise);
  if (exercise) {
    const response = await fetch(`/dashboard/water/${exercise}`, {
      method: 'PUT',
      body: JSON.stringify({ exercise }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace('/dashboard');
    }
  }
}

const updateSleep = async (event) => {
  event.preventDefault();
  let sleep = document.querySelector('#sleepInput').value.trim();
  console.log(sleep);
  if (sleep) {
    console.log(sleep)
    const response = await fetch(`/dashboard/water/${sleep}`, {
      method: 'PUT',
      body: JSON.stringify({ sleep }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText)
    }
  }
}

const updateMood = async (event) => {
  event.preventDefault();
  let mood = document.querySelector('#moodInput').value.trim();
  console.log(mood);
  if (mood) {
    console.log(mood)
    const response = await fetch(`/dashboard/water/${mood}`, {
      method: 'PUT',
      body: JSON.stringify({ mood }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText)
    }
  }
}

const updateNotes = async (event) => {
  event.preventDefault();
  let notes = document.querySelector("#notesInput").value.trim();
  console.log(notes);
  if (notes) {
    console.log(notes)
    const response = await fetch(`/dashboard/notes/${notes}`, {
      method: 'PUT',
      body: JSON.stringify({ notes }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText)
    }
  }
}

//Date picker
const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
/* date_picker_element.addEventListener('click', toggleDatePicker); */
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
/* function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
} */

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

// HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}

document
  .querySelector('#waterIntakeBtn')
  .addEventListener('click', updateWater);

document
  .querySelector('#exerciseBtn')
  .addEventListener('click', updateExercise);

document
  .querySelector('#sleepBtn')
  .addEventListener('click', updateSleep);
  
document
  .querySelector('#moodBtn')
  .addEventListener('click', updateMood);

  document
  .querySelector('#notesBtn')
  .addEventListener('click', updateNotes);