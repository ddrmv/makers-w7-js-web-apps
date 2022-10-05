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
});
