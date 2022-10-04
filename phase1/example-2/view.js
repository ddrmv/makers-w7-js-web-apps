class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This paragraph has been dynamically added by JavaScript!';

    const body = document.querySelector('body');
    body.append(newElement);
  }

  clearParagraphs() {
    const paragraphs = document.querySelectorAll('p');

    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].remove();
    }
  }
}

module.exports = View;