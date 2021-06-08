
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

//Date picker script
//Select all required elements from the html
const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');


//Create months array
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date(); //Create new date object
let day = date.getDate(); //Get day from date object
let month = date.getMonth(); //Get month from date object
let year = date.getFullYear(); //Get year from date object

//create variables for selected date, day, month, years
let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;


mth_element.textContent = months[month] + ' ' + year; //Set month element text content

selected_date_element.textContent = formatDate(date); //Set selected date element text content
selected_date_element.dataset.value = selectedDate; // Get value of the selected_date_element and set it equal to selectedDate

populateDates(); 

// EVENT LISTENERS
/* date_picker_element.addEventListener('click', toggleDatePicker); */
next_mth_element.addEventListener('click', goToNextMonth); //Add event listeners to go to next month
prev_mth_element.addEventListener('click', goToPrevMonth); //Add event listeners to go to previous month

// FUNCTIONS

//Next month function
function goToNextMonth (e) {
	month++; //Increment the month value
	if (month > 11) { //If this value exceeds 11, set month back to 0 and increment the year
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year; //populate new month element 
	populateDates(); //populate new dates
}


//Previous month function
function goToPrevMonth (e) {
	month--; //Reduce month value by 1 
	if (month < 0) { //If value goes below 0, set value to 11 and take 1 off the year
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year; //populate new month element
	populateDates(); //populate new dates
}

//Calculating leap year function
function leapYear(selectedYear)
{
  return ((selectedYear % 4 == 0) && (selectedYear % 100 != 0)) || (selectedYear % 400 == 0);
}



//Populate dates function
function populateDates (e) {
	days_element.innerHTML = ''; //Set days_element to be empty
	let amount_days = 31; //create amount of days variable
  //Defining days in each month
  if(month == 0) {
    amount_days = 30;
  }
	if (month == 1) {
    isLeapYear = leapYear(year);
    if (isLeapYear === true) {
      amount_days = 29;
    } else {
      amount_days = 28;
    }
	}
  if (month == 2) {
		amount_days = 31;
	}
  if (month == 3) {
		amount_days = 30;
	}
  if (month == 4) {
		amount_days = 31;
	}
  if (month == 5) {
		amount_days = 30;
	}
  if (month == 6) {
		amount_days = 31;
	}
  if (month == 7) {
		amount_days = 31;
	}
  if (month == 8) {
		amount_days = 30;
	}
  if (month == 9) {
		amount_days = 31;
	}
  if (month == 10) {
		amount_days = 30;
	}
  if (month == 11) {
		amount_days = 31;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div'); //Create the days div depending on the amount of days there are
		day_element.classList.add('day'); //Add day class from css
		day_element.textContent = i + 1; //Set the day text content to be equal to i+1 (because i starts at 0)

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		} //Adds selected css class to the clicked day
  
    //Function to create a selected date when you click on day
		day_element.addEventListener ('click', async function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate); //Set selected date element 
			selected_date_element.dataset.value = selectedDate; //Set selected date value

      normalisedSelectedDate = `${selectedDay}` + "-" +`${selectedMonth}` + "-" + `${selectedYear}`
			populateDates();
      
      if (normalisedSelectedDate) {
        console.log(normalisedSelectedDate)
        const response = await fetch(`/dashboard/selectedDate/${normalisedSelectedDate}`, {
          method: 'POST',
          body: JSON.stringify({ normalisedSelectedDate }),
          headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {;
          document.location.replace(`/dashboard`);
          console.log("hello");
        } else {
          alert(response.statusText)
        }
      }
		});

		days_element.appendChild(day_element); //Append the day element to the days element
	}
}

// HELPER FUNCTIONS
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