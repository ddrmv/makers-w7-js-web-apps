/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the buttons, shows and hides message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();
    expect(document.querySelector('#message')).not.toBeNull();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
    expect(document.querySelector('#message')).toBeNull();
  });
});