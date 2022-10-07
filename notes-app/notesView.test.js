/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

require('jest-fetch-mock').enableMocks()
jest.mock('./notesApi');

describe('NotesView', () => {
  beforeEach(() => {
    NotesApi.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    api = new NotesApi();
    view = new NotesView(model, api);
  });
  
  it('shows notes', () => {
    model.addNote('first note');
    model.addNote('second note');
    view.displayNotes();
    expect(document.querySelectorAll('.note').length).toEqual(2);
  });

  it('shows a note added by user', () => {
    document.querySelector('#user-input').value = 'this';
    const button = document.querySelector('#show-notes-button');
    button.click();
    expect(document.querySelectorAll('.note').length).toEqual(1);
  });

  it('shows two notes added by user correctly', () => {
    document.querySelector('#user-input').value = 'awesome!';
    const button = document.querySelector('#show-notes-button');
    button.click();
    document.querySelector('#user-input').value = 'awwmazing!';
    button.click();
    expect(document.querySelectorAll('.note').length).toEqual(2);
  });

  it('clears the input box on button click', () => {
    document.querySelector('#user-input').value = 'awesome!';
    const button = document.querySelector('#show-notes-button');
    button.click();
    expect(document.querySelector('#user-input').value).toEqual('');
  });

  // solution from Thomas and Lili, modified
  it('displays notes from api', (done) => {
    api.loadNotes.mockImplementation(() => {
      model.setNotes(['remote note']);
      view.displayNotes();
    });

    view.displayNotesFromApi();
    expect(api.loadNotes).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll('.note').length).toBe(1);
    expect(document.querySelector('.note').textContent).toEqual('remote note');
    done();
  });

  // modified version of the above, using manual mock
  it('displays notes from api', (done) => {
    const api = {
      loadNotes: () => {
        model.setNotes(['remote note']);
        view.displayNotes();
      }
    }

    const view = new NotesView(model, api);

    view.displayNotesFromApi();
    expect(document.querySelectorAll('.note').length).toBe(1);
    expect(document.querySelector('.note').textContent).toEqual('remote note');
    done();
  });
});
