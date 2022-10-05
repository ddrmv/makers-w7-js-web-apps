class NotesApi {
  loadNotes(callback) {
    const url = 'http://localhost:3000/notes';
    fetch(url)
      .then((response) => response.json())
      .then((result) => callback(result));
  }
}

module.exports = NotesApi;
