import View from './View.js';
import { state } from '../model.js';
class PreviewView extends View {
  _parentElement = '';

  _generateMarkup(result) {
    return `
    <li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
        <svg>
          <use href="src/img/icons.svg#icon-user"></use>
        </svg>
      </div>
      </div>
    </a>
  </li>
      `;
  }
}
export default new PreviewView();
