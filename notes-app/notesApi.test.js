const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks();

describe('NotesApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('calls fetch and loads data', (done) => {
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      arr: ['This note is coming from the server']
    }));

    notesApi.loadNotes((result) => {
      expect(result.arr).toEqual(['This note is coming from the server']);
      done();
    });
  });

  it('calls fetch and adds a new note', (done) => {
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      arr: ['from the server', 'new note']
    }));

    notesApi.createNote('new note that is not used', (result) => {
      expect(result.arr).toEqual(['from the server', 'new note']);
      done();
    });
  });
});



