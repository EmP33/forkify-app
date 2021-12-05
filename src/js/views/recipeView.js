// const iconURL = `./src/img/icons.svg`;
// import Fraction from 'fractional';
// const Fraction = require('fractional');
// console.log(Fraction);
import View from './View.js';
class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${this.iconURL}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this._data.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${this.iconURL}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this._data.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${this.iconURL}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${this.iconURL}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
       
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${this.iconURL}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    <div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">
${this._data.ingredients
  .map(ing => {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${this.iconURL}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>`;
  })
  .join('')}
    </div>


    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this._data.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${this.iconURL}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
  }
}
export default new RecipeView();
