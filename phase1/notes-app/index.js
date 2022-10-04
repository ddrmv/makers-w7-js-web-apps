const NotesModel = require('./notesModel');
const notesModel = new NotesModel();
console.log(notesModel.getNotes());

const newElement = document.createElement('p');
newElement.textContent = "random text";
document.querySelector('body').append(newElement);

const body = document.querySelector('body');
const newElement2 = document.createElement('p');

newElement2.textContent = "random text again";
body.append(newElement2);

const elementToRemove = document.querySelector('p');
elementToRemove.remove();