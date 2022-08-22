import type { Ingredient } from '../../type/ingredient';

export const recipesCard = (name: string, time: number, ingredients: Ingredient[], description: string): string =>
  /*html*/
  `<div class="card">
    <div class="image_container"></div>
    <div class="recipes_container">
      <div class="nameandtime">
        <p class="name">${name}</p>
        <div class="time">
          <img src="./timeicon.svg">
          <span>${time} min</span>
        </div>
      </div>
      <div class="recipe">
        <div class="ingredients">
        ${ingredients
          .map((ingredientInfos) => {
            const quantity = ingredientInfos.quantity || ingredientInfos.quantite;
            const { ingredient, unit } = ingredientInfos;
            return /*html*/ `<p>
              <span>${ingredient}</span>
              ${quantity ? ': ' + quantity : ''} ${unit || ''}
            </p>`;
          })
          .join('')}
        </div>
        <p class="description">
            ${description}
        </p>
      </div>
    </div>
   </div>`;
