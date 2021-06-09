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

			entry_date = `${selectedDay}` + "-" +`${selectedMonth + 1}` + "-" + `${selectedYear}`
			populateDates();
			console.log(entry_date);

      //Send response
      /* const response = await fetch(`/dashboard/entry_date/${entry_date}`, {
        method: 'POST',
        body: JSON.stringify({ entry_date }),
        headers: { 'Content-Type': 'application/json' },
      }); */
      
      //If ok, load /dashboard page
      /* if(response.ok) {;
        console.log("hello");
        document.location.replace(`/dashboard`);
        
      } else {
        alert(response.statusText)
      } */

		});

		days_element.appendChild(day_element); //Append the day element to the days element
	}
}

const dashboardHandler = async (event) => {
	event.preventDefault();
	let entry_date = document.querySelector('#selectedDate').textContent;
	/* console.log(entry_date); */
	//Send response
      /* const response = await fetch(`/dashboard/entry_date/${entry_date}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      
      //If ok, load /dashboard page
      if(response.ok) {;
        console.log("hello");
		console.log(response);
        document.location.replace(`/dashboard`);
        
      } else {
        alert(response.statusText)
      } */
	  document.location.replace(`/dashboard/entry_date/${entry_date}`);
	  
}


document.querySelector('#calandarBtn').addEventListener('click', dashboardHandler)

// HELPER FUNCTIONS
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = month;
	}

	let year = d.getFullYear();

	return day + '-' + month + '-' + year;
}