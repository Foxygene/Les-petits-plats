export const searchBox = (placeholder = 'Chercher une recette', src = './searchicon.svg') =>
  /*html*/
  `<div class="search_box">
    <input placeholder="${placeholder}">
    <img src="${src}"/>
   </div>`;
