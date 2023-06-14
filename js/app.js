// selecting dom elements
const noteArea = document.querySelector(".note-area");
const title = document.querySelector(".title");
const notes = document.querySelector(".notes");
const note = document.querySelector(".note");
const clearBtn = document.querySelector(".clear-btn");

// add note function

function addNote(title) {
  notes.innerHTML += `
  <div class="note">
  <ul>
    <li>${title}</li>
    </ul>
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
 
</div>
  `
}
function clearNote(event) {
  if(event.target.classList.contains('clear-btn')) {
    notes.remove();
  
  }
}


document.addEventListener('click', function(e) {
  if(!e.target.classList.contains('title')) {
    if(title.value === '') {
      return;
    } else {
      // add note to page
      addNote(title.value);
      title.value = '';
    }
  }
});

document.addEventListener('click',  function(e) {
  if(e.target.classList.contains('delete')) {
     // Traverse the DOM to find the parent note element
  const noteElement = e.target.closest('.note');
  if(noteElement) {
    noteElement.remove();
  }
  } else if(e.target.classList.contains('complete')) {
    e.target.parentElement.querySelector('li').style.textDecoration = 'line-through';
  }
})

clearBtn.addEventListener('click', clearNote);