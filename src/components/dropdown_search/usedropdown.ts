import { filterPill } from '../filter_pill/filter_pill';
import { usePill } from '../filter_pill/use_pill';

export const useDropdown = (filterBox: HTMLDivElement): void => {
  const options = document.querySelectorAll('.option');

  options.forEach((option) => {
    option.addEventListener('click', () => {
      filterBox.innerHTML = filterBox.innerHTML + filterPill(option.innerHTML, option.parentElement?.classList[1]);
      usePill(document.querySelector<HTMLDivElement>('.filter_box')!);
    });
  });
};
