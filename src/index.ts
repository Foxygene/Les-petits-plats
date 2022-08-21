import { dropdownSearch } from './components/dropdown_search/dropdownsearch';
import { header } from './components/header/header';
import { recipesCard } from './components/recipes_card/recipescard';
import { searchBox } from './components/search_box/searchbox';
import { recipes } from './data/recipes.js';
import type { Recipe } from './type/recipe';

const recipeList = recipes as Recipe[];

document.body.innerHTML =
  /*html*/
  `<main>
  ${header()}
  ${searchBox()}
  <div class="dropdowns_container">
    ${dropdownSearch()}
    ${dropdownSearch('Appareils', 'bg_green')}
    ${dropdownSearch('Ustensiles', 'bg_red')}
  </div>
  <div class="cards_container">
    ${recipeList
      .map((recipe) => recipesCard(recipe.name, recipe.time, recipe.ingredients, recipe.description))
      .join('')}
  </div>
</main>`;
