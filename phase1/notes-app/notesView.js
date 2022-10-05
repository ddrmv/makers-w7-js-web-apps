class NotesView {
  constructor(model) {
    this.model = model;
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
