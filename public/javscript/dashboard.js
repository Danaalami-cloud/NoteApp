
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