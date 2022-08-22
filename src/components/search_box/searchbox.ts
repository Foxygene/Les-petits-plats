export const searchBox = (placeholder = 'Chercher une recette', src = './searchicon.svg'): string =>
  /*html*/
  `<div class="search_box">
    <input placeholder="${placeholder}">
    <img src="${src}"/>
   </div>`;
