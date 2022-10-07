class NotesApi {
  loadNotes(callback) {
    const url = 'http://localhost:3000/notes';
    fetch(url)
      .then((response) => response.json())
      .then((result) => callback(result));
  }

  createNote(noteText, callback) {
    const noteToSend = {content: noteText};
    const url = 'http://localhost:3000/notes';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(noteToSend),
    })
      .then((response) => response.json())
      .then((result) => callback(result));
  }
}

module.exports = NotesApi;
