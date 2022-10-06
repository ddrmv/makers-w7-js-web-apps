class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.showButtonEl = document.querySelector('#show-notes-button');
    this.showButtonEl.addEventListener('click', () => {
      this.addNote();
    });
  }

  addNote() {
    const userInput = document.querySelector('#user-input').value;
    this.model.addNote(userInput);
    this.removeNotes();
    this.clearUserInput();
    this.displayNotes();
  }

  displayNotes() {
    this.model.getNotes().forEach((note) => {
      const newElement = document.createElement('div');
      newElement.textContent = note;
      newElement.className = 'note';
      document.body.appendChild(newElement);
    })
  }

  displayNotesFromApi = (() => {
    this.api.loadNotes((notesFromApi) => {
      this.model.setNotes(notesFromApi);
      this.displayNotes();
    });
  })

  removeNotes() {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    })
  }

  clearUserInput() {
    document.querySelector('#user-input').value = '';
  }
}

module.exports = NotesView;
