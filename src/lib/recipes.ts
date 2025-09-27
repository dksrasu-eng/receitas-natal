import recipesData from '@/data/recipes.json';
import type { Recipe } from './types';
import { slugify } from './utils';

const allRecipes: Recipe[] = (recipesData as Recipe[]).map(recipe => ({
  ...recipe,
  id: slugify(recipe.titulo)
}));


export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
