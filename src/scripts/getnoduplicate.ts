import type { Ingredient } from '../type/ingredient';
import type { Recipe } from '../type/recipes';

export const getNoDuplicate = (type: string, recipes: Recipe[]): Ingredient[] => {
  const noDuplicate: Array<string> = [];
  if (type === 'ingredient') {
    recipes.forEach((recipe) => {
      recipe.ingredients.filter((element) => {
        const isDuplicate = noDuplicate.includes(element.ingredient);

        if (!isDuplicate) {
          noDuplicate.push(element.ingredient);

          return true;
        }
        return false;
      });
    });
  }

  if (type === 'appliance') {
    recipes.forEach((recipes) => {
      const isDuplicate = noDuplicate.includes(recipes.appliance);

      if (!isDuplicate) noDuplicate.push(recipes.appliance);
    });
  }

  if (type === 'ustensils') {
    recipes.forEach((recipe) => {
      recipe.ustensils.filter((element) => {
        const isDuplicate = noDuplicate.includes(element);

        if (!isDuplicate) {
          noDuplicate.push(element);

          return true;
        }
        return false;
      });
    });
  }

  return noDuplicate;
};
