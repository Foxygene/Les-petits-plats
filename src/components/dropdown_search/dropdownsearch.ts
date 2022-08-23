export const dropdownSearch = (
  placeholder = 'Items',
  color = 'bg_blue',
  options: [string],
  src = './arrowdownicon.svg'
): string =>
  /*html*/
  `<div class="dropdown_search ${color}">
    <input placeholder="${placeholder}">
    <img src="${src}">
  </div>
  <div class="dropdown_options">
    ${options
      .map((item) => {
        return /*html*/ `
      <a>${item}</a>`;
      })
      .join('')}}
  </div>`;
