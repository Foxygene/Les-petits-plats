import { dropdownSearch } from '../components/dropdown_search/dropdownsearch';
import { useDropdown } from '../components/dropdown_search/usedropdown';
import { recipesCard } from '../components/recipes_card/recipescard';
import { gatherFilter } from './gatherfilter';
import { filterRecipes } from './getfiltereddata';
import { getNoDuplicate } from './getnoduplicate';

export const refreshDOMelementsToFilter = (mainSearchInput): void => {
  const activeFilters = gatherFilter();
  let filteredData = filterRecipes(activeFilters);

  if (mainSearchInput !== null) {
    filteredData = filteredData.filter((recipe) => {
      const inputSearch = mainSearchInput.toUpperCase();
      const recipeName = recipe.name.toUpperCase();
      const recipeDescription = recipe.description.toUpperCase();
      const recipeIngredients = recipe.ingredients;

      return (
        recipeName.includes(inputSearch) ||
        recipeDescription.includes(inputSearch) ||
        recipeIngredients.some((recipe) => recipe.ingredient.includes(inputSearch))
      );
    });
  }

  const mediaCardsContainer = document.querySelector<HTMLDivElement>('.cards_container');
  mediaCardsContainer!.innerHTML = filteredData
    .map((recipe) => recipesCard(recipe.name, recipe.time, recipe.ingredients, recipe.description))
    .join('');

  const dropdownsContainer = document.querySelector('.dropdowns_container');
  const ingredientList = getNoDuplicate('ingredient', filteredData);
  const applianceList = getNoDuplicate('appliance', filteredData);
  const ustensilsList = getNoDuplicate('ustensils', filteredData);

  dropdownsContainer!.innerHTML = `${dropdownSearch('Ingredients', 'bg_blue', ingredientList)}
  ${dropdownSearch('Appareils', 'bg_green', applianceList)}
  ${dropdownSearch('Ustensiles', 'bg_red', ustensilsList)}`;

  useDropdown(document.querySelector<HTMLDivElement>('.filter_box')!);
};
