/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView', () => {
  it('shows notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('first note');
    model.addNote('second note');
    view.displayNotes();
    expect(document.querySelectorAll('.note').length).toEqual(2);
  });

  it('shows a note added by user', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);

    document.querySelector('#user-input').value = 'this';
    const button = document.querySelector('#show-notes-button');
    button.click();
    setTimeout(() => {
      expect(document.querySelector('.note').length).toEqual(1);
    }, 500);
  });
});
