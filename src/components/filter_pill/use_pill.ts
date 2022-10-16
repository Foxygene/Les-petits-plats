import { refreshDOMelementsToFilter } from '../../scripts/refreshdomelementstofilter';

export const usePill = (filterBox: HTMLDivElement): void => {
  const deleteButtonList = filterBox.querySelectorAll<HTMLButtonElement>('.close_pill_button');

  deleteButtonList.forEach((deleteButton) => {
    deleteButton.addEventListener(
      'click',
      () => {
        deleteButton.parentElement?.remove();
        refreshDOMelementsToFilter();
      },
      true
    );
  });
};
