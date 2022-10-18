import { gatherFilter } from '../../scripts/gatherfilter';
import { refreshDOMelementsToFilter } from '../../scripts/refreshdomelementstofilter';
import { filterPill } from '../filter_pill/filter_pill';
import { usePill } from '../filter_pill/use_pill';

export const useDropdown = (filterBox: HTMLDivElement): void => {
  const searchBar = document.querySelector('.dropdown_search');
  const options = document.querySelectorAll('.option');

  searchBar?.addEventListener('input', (event) => {
    const optionContainer = event.path[1].nextElementSibling;

    optionContainer.innerHTML = console.log(event.srcElement.value);
    console.log(event.path[1].nextElementSibling);
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      filterBox.innerHTML = filterBox.innerHTML + filterPill(option.innerHTML, option.parentElement?.classList[1]);
      usePill(document.querySelector<HTMLDivElement>('.filter_box')!);
      refreshDOMelementsToFilter();
    });
  });
};
