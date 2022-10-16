import type { Ingredient } from '../../type/ingredient';

export const dropdownSearch = (placeholder: string, color: string, options: Ingredient[]): string =>
  /*html*/
  `<div class="dropdown">
    <div class="dropdown_search ${color}">
      <input placeholder="${placeholder}">
      <img src="./arrowdownicon.svg">
    </div>
    <div id='${placeholder}' class="dropdown_options ${color}">
      ${options.map((item) => /*html*/ `<button class="option">${item}</button>`).join('')}
    </div>
  </div>`;
