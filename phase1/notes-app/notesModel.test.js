const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('has an empty list of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('adds a note', () => {
    const model = new NotesModel();
    model.addNote('Buy a small country');
    expect(model.getNotes()).toEqual(['Buy a small country']);
  });

  it('resets notes', () => {
    const model = new NotesModel();
    model.addNote('Buy a small country');
    expect(model.getNotes()).toEqual(['Buy a small country']);
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });

});

// const model = new notesModel();
// model.getNotes(); // returns []
// model.addNote('Buy a small country');
// model.addNote('Lift spoon');
// model.getNotes();
// model.reset();
// model.getNotes();