const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks();

describe('NotesApi', () => {
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
});
