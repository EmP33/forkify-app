// import '/node_modules/core-js/stable';
// import '../../node_modules/core-js/stable';
// import '../regenerator-runtime/runtime';
import * as model from './model.js';
import searchView from './views/searchView.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
const recipeContainer = document.querySelector('.recipe');
const iconURL = `./src/img/icons.svg`;

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    // searchView.clearInput();
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
