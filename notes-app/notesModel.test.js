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

  describe('#setNotes', () => {
    it('sets notes to provided list', () => {
      const model = new NotesModel();
      model.setNotes(['note one', 'note two']);
      expect(model.getNotes()).toEqual(['note one', 'note two']);
    });
  });

});
