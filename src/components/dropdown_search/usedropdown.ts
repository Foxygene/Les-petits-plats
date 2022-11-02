import { getActiveFilters } from '../../scripts/gatherfilter';
import { filterRecipes } from '../../scripts/getfiltereddata';
import { getNoDuplicate } from '../../scripts/getnoduplicate';
import { pullOutActiveFilter } from '../../scripts/pulloutactivefilter';
import { refreshDOMelementsToFilter } from '../../scripts/refreshdomelementstofilter';
import { filterPill } from '../filter_pill/filter_pill';
import { usePill } from '../filter_pill/use_pill';

export const useDropdown = (dropdownContainer: HTMLDivElement, filterBox: HTMLDivElement): void => {
  const dropdowns = dropdownContainer.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const searchbarContainer = dropdown.querySelector('.dropdown_search') as HTMLDivElement;
    const optionContainer = dropdown.querySelector('.dropdown_options') as HTMLDivElement;
    const searchInput = searchbarContainer?.querySelector('input') as HTMLInputElement;
    const color = Array.from(searchbarContainer.classList).find((className) => className.includes('bg_')) as string;

    const handleOptionClick = (option: HTMLButtonElement): void => {
      const pill = filterPill(option.textContent as string, color);
      filterBox.innerHTML += pill;
      usePill(filterBox);
      refreshDOMelementsToFilter();
    };

    optionContainer
      .querySelectorAll('.option')
      .forEach((option) => option.addEventListener('click', () => handleOptionClick(option as HTMLButtonElement)));

    searchInput.addEventListener('input', () => {
      const activeFilters = getActiveFilters();
      const filteredData = filterRecipes(activeFilters);

      let optionsContent: string[] = [];
      if (color === 'bg_blue') {
        optionsContent = getNoDuplicate('ingredient', filteredData);
        optionsContent = pullOutActiveFilter(optionsContent, activeFilters[0]);
      }
      if (color === 'bg_green') {
        optionsContent = getNoDuplicate('appliance', filteredData);
        optionsContent = pullOutActiveFilter(optionsContent, activeFilters[1]);
      }
      if (color === 'bg_red') {
        optionsContent = getNoDuplicate('ustensil', filteredData);
        optionsContent = pullOutActiveFilter(optionsContent, activeFilters[2]);
      }

      optionContainer.innerHTML = optionsContent
        .filter((option) => option.toUpperCase().includes(searchInput.value.toUpperCase()))
        .map((item) => /*html*/ `<button class="option">${item}</button>`)
        .join('');

      optionContainer
        .querySelectorAll('.option')
        .forEach((option) => option.addEventListener('click', () => handleOptionClick(option as HTMLButtonElement)));
    });
  });
};
