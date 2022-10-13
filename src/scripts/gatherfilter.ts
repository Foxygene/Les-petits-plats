import type { filterListByType } from '../type/filterlistbytype';

export const gatherFilter = (): filterListByType => {
  const pills = document.querySelectorAll('.pill');

  const ingredientList = [];
  const applianceList = [];
  const ustensilsList = [];

  pills.forEach((pill) => {
    if (pill.classList[1] === 'bg_blue') ingredientList.push(pill.firstElementChild?.innerHTML);
    if (pill.classList[1] === 'bg_green') applianceList.push(pill.firstElementChild?.innerHTML);
    if (pill.classList[1] === 'bg_red') ustensilsList.push(pill.firstElementChild?.innerHTML);
  });

  return [ingredientList, applianceList, ustensilsList];
};
