import type { Ingredient } from "../../type/ingredient";

export const dropdownSearch = (
  placeholder = 'Items',
  color = 'bg_blue',
  options: Ingredient[],
  src = './arrowdownicon.svg'
): string =>
  /*html*/
  `<div class="dropdown">
    <div class="dropdown_search ${color}">
      <input placeholder="${placeholder}">
      <img src="${src}">
    </div>
    <div class="dropdown_options ${color}">
      ${options.map((item) => /*html*/ `<a>${item}</a>`).join('')}
    </div>
  </div>`;