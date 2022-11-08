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
  const filteredData2 = filteredData;
  const inputSearch = mainSearchInput.toUpperCase();

  if (mainSearchInput != null) {
    console.time(inputSearch);
    const filteredDataWithInput = [];

    for (let i = 0; i < filteredData2.length; i++) {
      let validateRecipe = false;
      if (
        filteredData2[i]?.name.toUpperCase().includes(inputSearch) ||
        filteredData2[i]?.description.toUpperCase().includes(inputSearch)
      ) {
        validateRecipe = true;
      }
      for (let j = 0; j < filteredData2[i]!.ingredients.length; j++) {
        const ingredient = filteredData2[i]?.ingredients[j]?.ingredient;
        if (ingredient?.toUpperCase().includes(inputSearch)) {
          validateRecipe = true;
        }
      }
      if (validateRecipe) {
        filteredDataWithInput.push(filteredData2[i]);
      }
    }
    console.timeEnd(inputSearch);
  }

  const mediaCardsContainer = document.querySelector<HTMLDivElement>('.cards_container');
  mediaCardsContainer!.innerHTML = filteredData2
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
