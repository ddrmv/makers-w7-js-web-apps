class MessageView {
  constructor() {
    this.showButtonEl = document.querySelector('#show-message-button');
    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    const newEl = document.createElement('p');
    const inputEl = document.querySelector('#message-input');
    newEl.textContent = inputEl.value;
    newEl.id = 'message';
    document.querySelector('#main-container').append(newEl);
  }

  hideMessage() {
    const messageToHide = document.querySelector('#message');
    messageToHide.remove();
  }
}

module.exports = MessageView;
