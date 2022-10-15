import { recipesCard } from '../components/recipes_card/recipescard';
import { gatherFilter } from './gatherfilter';
import { filterRecipes } from './getfiltereddata';

export const refreshDOMelementsToFilter = (): void => {
  const activeFilters = gatherFilter();
  const filteredData = filterRecipes(activeFilters);

  const mediaCards = document.querySelector<HTMLDivElement>('.cards_container');

  mediaCards!.innerHTML = filteredData
    .map((recipe) => recipesCard(recipe.name, recipe.time, recipe.ingredients, recipe.description))
    .join('');
};
