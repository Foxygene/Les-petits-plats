import type { Ingredient } from './type/ingredient';
import type { Recipe } from './type/recipes';

export const getNoDuplicate = (type: string, recipes: Recipe[]): Ingredient[] => {
  const isUnique: Array<string> = [];
  if (type === 'ingredient') {
  recipes.forEach((recipe) => {
    recipe.ingredients.filter((element) => {
      const isDuplicate = isUnique.includes(element.ingredient);

      if (!isDuplicate) {
        isUnique.push(element.ingredient);

        return true;
      }
      return false;
    });
  });}

  if (type === 'appliance') {
    recipes.forEach((recipes) => {
      const isDuplicate = isUnique.includes(recipes.appliance);

      if (!isDuplicate) isUnique.push(recipes.appliance);
    })
  }

  if (type === 'ustensils') {
    recipes.forEach((recipe) => {
      recipe.ustensils.filter((element) => {
        const isDuplicate = isUnique.includes(element);
  
        if (!isDuplicate) {
          isUnique.push(element);
  
          return true;
        }
        return false;
      });
    });
  }

  return isUnique;
};
