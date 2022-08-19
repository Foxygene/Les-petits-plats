import { header } from './components/header/header';
import { searchBox } from './components/search_box/searchbox';
import { recipes } from './data/recipes.js';

document.body.innerHTML = `<main">
  ${header()}
  ${searchBox()}
</main>`;
