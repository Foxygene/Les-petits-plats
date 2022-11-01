import type { filterListByType } from '../type/filterlistbytype';

export const getActiveFilters = (): filterListByType => {
  const pills = document.querySelectorAll('.pill');

  const ingredientList: string[] = [];
  const applianceList: string[] = [];
  const ustensilsList: string[] = [];

  pills.forEach((pill) => {
    const pillText = pill.firstElementChild?.innerHTML;
    if (pillText === undefined) throw Error('Pill text is undefined');

    if (pill.classList.contains('bg_blue')) ingredientList.push(pillText);
    if (pill.classList.contains('bg_green')) applianceList.push(pillText);
    if (pill.classList.contains('bg_red')) ustensilsList.push(pillText);
  });

  return [ingredientList, applianceList, ustensilsList];
};
