import type { Ingredient } from './type/ingredient';
import type { Recipe } from './type/recipes';

export const getNoDuplicate = (recipes: Recipe[]): Ingredient[] => {
  const isUnique: Array<string> = [];

  recipes.forEach((recipe) => {
    recipe.ingredients.filter((element) => {
      const isDuplicate = isUnique.includes(element.ingredient);

      if (!isDuplicate) {
        isUnique.push(element.ingredient);

        return true;
      }
      return false;
    });
  });

  return isUnique;
};
