import { refreshDOMelementsToFilter } from '../../scripts/refreshdomelementstofilter';

export const useSearchBox = (searchBox: HTMLDivElement): void => {
  const searchInput = searchBox.querySelector('input') as HTMLInputElement;

  searchInput?.addEventListener('input', () => {
    refreshDOMelementsToFilter();
  });
};
