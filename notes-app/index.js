const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const notesModel = new NotesModel();
const notesView = new NotesView(notesModel);

notesModel.addNote('This is an example note');
notesView.displayNotes();
