import type { Ingredient } from './ingredient';

export type Recipe = {
  id: number;
  name: string;
  servings: number;
  time: number;
  description: string;
  appliance: string;
  ustensils: string[];
  ingredients: Ingredient[];
};
