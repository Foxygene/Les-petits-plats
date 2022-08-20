import { dropdownSearch } from './components/dropdown_search/dropdownsearch';
import { header } from './components/header/header';
import { searchBox } from './components/search_box/searchbox';
import { recipes } from './data/recipes.js';

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
</main>`;
