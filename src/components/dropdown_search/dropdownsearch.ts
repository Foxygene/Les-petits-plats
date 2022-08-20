export const dropdownSearch = (placeholder = 'Ingredients', color = 'bg_blue', src = './arrowdownicon.svg') =>
  /*html*/
  `<div class="dropdown_search ${color}">
    <input placeholder="${placeholder}">
    <img src="${src}">
  </div>
  <div class="dropdown_options">
    
  </div>`;
