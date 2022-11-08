import { dropdownSearch } from '../components/dropdown_search/dropdownsearch';
import { useDropdown } from '../components/dropdown_search/usedropdown';
import { recipesCard } from '../components/recipes_card/recipescard';
import { getActiveFilters } from './gatherfilter';
import { filterRecipes } from './getfiltereddata';
import { getNoDuplicate } from './getnoduplicate';
import { pullOutActiveFilter } from './pulloutactivefilter';

export const refreshDOMelementsToFilter = (): void => {
  const mainSearchContainer = document.querySelector('.search_box') as HTMLDivElement;
  const mainSearchBar = mainSearchContainer.querySelector('input') as HTMLInputElement;
  const mainSearchInput = mainSearchBar.value;

  const activeFilters = getActiveFilters();
  let filteredData = filterRecipes(activeFilters);

  if (mainSearchInput != null) {
    console.time(mainSearchInput.toUpperCase());
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
    console.timeEnd(mainSearchInput.toUpperCase());
  }

  const mediaCardsContainer = document.querySelector<HTMLDivElement>('.cards_container');
  mediaCardsContainer!.innerHTML = filteredData
    .map((recipe) => recipesCard(recipe.name, recipe.time, recipe.ingredients, recipe.description))
    .join('');

  const dropdownsContainer = document.querySelector('.dropdowns_container');
  let ingredientList = getNoDuplicate('ingredient', filteredData);
  ingredientList = pullOutActiveFilter(ingredientList, activeFilters[0]);
  let applianceList = getNoDuplicate('appliance', filteredData);
  applianceList = pullOutActiveFilter(applianceList, activeFilters[1]);
  let ustensilsList = getNoDuplicate('ustensils', filteredData);
  ustensilsList = pullOutActiveFilter(ustensilsList, activeFilters[2]);

  dropdownsContainer!.innerHTML = `${dropdownSearch('Ingredients', 'bg_blue', ingredientList)}
  ${dropdownSearch('Appareils', 'bg_green', applianceList)}
  ${dropdownSearch('Ustensiles', 'bg_red', ustensilsList)}`;

  useDropdown(
    document.querySelector<HTMLDivElement>('.dropdowns_container')!,
    document.querySelector<HTMLDivElement>('.filter_box')!
  );

  if (mediaCardsContainer?.firstElementChild === null) {
    mediaCardsContainer.innerHTML = /*html*/ `<p class='error_message'>Aucunes recettes ne correspond à votre recherche.</p>`;
  }
};
