class NotesModel {
  constructor() {
    this.notes = [];
  }

  setNotes(remoteNotes) {
    this.notes = remoteNotes;
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
