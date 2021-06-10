
const updateWater = async (event) => {
  event.preventDefault();
  let water = document.querySelector('#waterIntake').value.trim();
  let entry_date = document.querySelector('body > div:nth-child(2) > div.column.is-two-fifths.container.block > div > div:nth-child(1) > p:nth-child(2)').textContent
  const date = entry_date.split(":")[1].trim();
  console.log(water);
  console.log(date);
  if (water) {
    const response = await fetch(`/dashboard/water/${water}`, {
      method: 'PUT',
      body: JSON.stringify({ water, date }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace(`/dashboard/entry_date/${date}`);
    }
  }
}

const updateExercise = async (event) => {
  event.preventDefault();
  let exercise = document.querySelector('#exerciseInput').value.trim();
  let entry_date = document.querySelector('body > div:nth-child(2) > div.column.is-two-fifths.container.block > div > div:nth-child(1) > p:nth-child(2)').textContent
  const date = entry_date.split(":")[1].trim()
  console.log(exercise);
  if (exercise) {
    const response = await fetch(`/dashboard/water/${exercise}`, {
      method: 'PUT',
      body: JSON.stringify({ exercise, date }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace(`/dashboard/entry_date/${date}`);
    }
  }
}

const updateSleep = async (event) => {
  event.preventDefault();
  let sleep = document.querySelector('#sleepInput').value.trim();
  let entry_date = document.querySelector('body > div:nth-child(2) > div.column.is-two-fifths.container.block > div > div:nth-child(1) > p:nth-child(2)').textContent
  const date = entry_date.split(":")[1].trim();
  console.log(sleep);
  if (sleep) {
    console.log(sleep)
    const response = await fetch(`/dashboard/water/${sleep}`, {
      method: 'PUT',
      body: JSON.stringify({ sleep, date }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace(`/dashboard/entry_date/${date}`);
    } else {
      alert(response.statusText)
    }
  }
}

const updateMood = async (event) => {
  event.preventDefault();
  let mood = document.querySelector('#moodInput').value.trim();
  let entry_date = document.querySelector('body > div:nth-child(2) > div.column.is-two-fifths.container.block > div > div:nth-child(1) > p:nth-child(2)').textContent
  const date = entry_date.split(":")[1].trim();
  console.log(mood);
  if (mood) {
    console.log(mood)
    const response = await fetch(`/dashboard/water/${mood}`, {
      method: 'PUT',
      body: JSON.stringify({ mood, date }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace(`/dashboard/entry_date/${date}`);
    } else {
      alert(response.statusText)
    }
  }
}

const updateNotes = async (event) => {
  event.preventDefault();
  let notes = document.querySelector("#notesInput").value.trim();
  let entry_date = document.querySelector('body > div:nth-child(2) > div.column.is-two-fifths.container.block > div > div:nth-child(1) > p:nth-child(2)').textContent
  const date = entry_date.split(":")[1].trim();
  console.log(notes);
  if (notes) {
    console.log(notes)
    const response = await fetch(`/dashboard/notes/${notes}`, {
      method: 'PUT',
      body: JSON.stringify({ notes, date }),
      headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
      document.location.replace(`/dashboard/entry_date/${date}`);
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