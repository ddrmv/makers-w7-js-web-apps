class NotesView {
  constructor(model) {
    this.model = model;

    this.showButtonEl = document.querySelector('#show-notes-button');
    this.showButtonEl.addEventListener('click', () => {
      this.addNote();
    });
  }

  addNote() {
    const userInput = document.querySelector('#user-input').value;
    this.model.addNote(userInput);
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
}

module.exports = NotesView;
