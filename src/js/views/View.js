export default class View {
  iconURL = `./src/img/icons.svg`;
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

//   update(data) {
//     if (!data || (Array.isArray(data) && data.length === 0))
//       return this.renderError();
//     this._data = data;
//     const newMarkup = this._generateMarkup();

//     const newDOM = document.createRange().createContextualFragment(newMarkup);
//     const newElements = Array.from(newDOM.querySelectorAll('*'));
//     const curElements = Array.from(this._parentElement.querySelectorAll('*'));
//     newElements.forEach((newEl, i) => {
//       const curEl = curEl[i];
//       if (
//         !newEl.isEqualNode(curEl) &&
//         newEl.firstChild.nodeValue.trim() !== ''
//       ) {
//         curEl.textContent = newEl.textContent;
//       }
//     });
//   }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner = function () {
    const markup = `
        <div class="spinner">
          <svg>
          <use href="${this.iconURL}#icon-loader"></use>
          </svg>
        </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${this.iconURL}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
      <div>
        <svg>
          <use href="${this.iconURL}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
