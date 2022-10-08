import { dropdownSearch } from './components/dropdown_search/dropdownsearch';
import { useDropdown } from './components/dropdown_search/usedropdown';
import { header } from './components/header/header';
import { recipesCard } from './components/recipes_card/recipescard';
import { searchBox } from './components/search_box/searchbox';
import { recipes } from './data/recipes';
import { getNoDuplicate } from './scripts/getnoduplicate';

const ingredientList = getNoDuplicate('ingredient', recipes);
const applianceList = getNoDuplicate('appliance', recipes);
const ustensilsList = getNoDuplicate('ustensils', recipes);

document.body.innerHTML =
  /*html*/
  `<main>
  ${header()}
  ${searchBox()}
  <div class="filter_box">
  </div>
  <div class="dropdowns_container">
    ${dropdownSearch('Ingredients', 'bg_blue', ingredientList)}
    ${dropdownSearch('Appareils', 'bg_green', applianceList)}
    ${dropdownSearch('Ustensiles', 'bg_red', ustensilsList)}
  </div>
  <div class="cards_container">
    ${recipes.map((recipe) => recipesCard(recipe.name, recipe.time, recipe.ingredients, recipe.description)).join('')}
  </div>
</main>`;

useDropdown(document.querySelector<HTMLDivElement>('.filter_box')!);
