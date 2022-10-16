import { recipes } from '../data/recipes';
import type { filterListByType } from '../type/filterlistbytype';
import type { Recipe } from '../type/recipes';

export const filterRecipes = (activeFilters: filterListByType): Recipe[] => {
  const [ingredientsFilter, applianceFilter, ustensilsFilter] = activeFilters;

  let updatedRecipes = recipes;

  if (applianceFilter.length !== 0)
    updatedRecipes = updatedRecipes.filter((recipe) => applianceFilter.includes(recipe.appliance));

  if (ustensilsFilter.length !== 0)
    updatedRecipes = updatedRecipes.filter((recipe) =>
      ustensilsFilter.some((ustensil) => recipe.ustensils.includes(ustensil))
    );

  if (ingredientsFilter.length !== 0)
    updatedRecipes = updatedRecipes.filter((recipe) =>
      ingredientsFilter.some((ingredient) =>
        recipe.ingredients.map((ingredient) => ingredient.ingredient).includes(ingredient)
      )
    );

  return updatedRecipes;
};
