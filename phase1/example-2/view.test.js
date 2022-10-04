/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
    view.addParagraph('the new paragraph');
    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('removes all paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2);
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  });


});