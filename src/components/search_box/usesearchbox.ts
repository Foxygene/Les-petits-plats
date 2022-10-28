import { refreshDOMelementsToFilter } from '../../scripts/refreshdomelementstofilter';

export const useSearchBox = (searchBox: HTMLDivElement): void => {
  const searchInput = searchBox.firstElementChild;

  searchInput?.addEventListener('input', (event) => {
    refreshDOMelementsToFilter(event.target.value);
  });
};
