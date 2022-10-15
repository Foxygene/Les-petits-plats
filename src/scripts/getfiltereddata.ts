import { recipes } from '../data/recipes';
import type { filterListByType } from '../type/filterlistbytype';
import type { Recipe } from '../type/recipes';

export const filterRecipes = (activeFilters: filterListByType): Recipe[] => {
  const [ingredientsFilter, applianceFilter, ustensilsFilter] = activeFilters;

  return recipes
    .filter((recipe) => applianceFilter.includes(recipe.appliance))
    .filter((recipe) => ustensilsFilter.some((ustensil) => recipe.ustensils.includes(ustensil)))
    .filter((recipe) =>
      ingredientsFilter.some((ingredient) =>
        recipe.ingredients.map((ingredient) => ingredient.ingredient).includes(ingredient)
      )
    );
};
