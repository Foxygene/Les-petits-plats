import { gatherFilter } from '../../scripts/gatherfilter';
import { filterRecipes } from '../../scripts/getfiltereddata';
import { getNoDuplicate } from '../../scripts/getnoduplicate';
import { refreshDOMelementsToFilter } from '../../scripts/refreshdomelementstofilter';
import { filterPill } from '../filter_pill/filter_pill';
import { usePill } from '../filter_pill/use_pill';

export const useDropdown = (filterBox: HTMLDivElement): void => {
  const searchBar = document.querySelectorAll('.dropdown_search');
  const options = document.querySelectorAll('.option');

  searchBar.forEach((searchBar) =>
    searchBar!.addEventListener('input', (event) => {
      const activeFilters = gatherFilter();
      const filteredData = filterRecipes(activeFilters);
      const optionContainer = event.path[1].nextElementSibling;

      if (event.path[1].classList[1] === 'bg_blue') {
        const ingredientList = getNoDuplicate('ingredient', filteredData);

        const searchList = ingredientList.filter((option) => event.srcElement.value.includes(option));
        console.log(searchList);

        optionContainer.innerHTML = searchList;
      }
      // console.log(event.path[1].nextElementSibling);
      // console.log(event.path[1].classList[1]);
    })
  );

  options.forEach((option) => {
    option.addEventListener('click', () => {
      filterBox.innerHTML = filterBox.innerHTML + filterPill(option.innerHTML, option.parentElement?.classList[1]);
      usePill(document.querySelector<HTMLDivElement>('.filter_box')!);
      refreshDOMelementsToFilter();
    });
  });
};
