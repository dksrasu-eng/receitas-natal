import recipesData from '@/data/recipes.json';
import type { Recipe } from './types';
import { slugify } from './utils';
import { PlaceHolderImages } from './placeholder-images';

const allRecipes: Recipe[] = (recipesData as Omit<Recipe, 'image'>[]).map(recipe => {
  const image = PlaceHolderImages.find(img => img.id === slugify(recipe.titulo));
  return {
    ...recipe,
    id: slugify(recipe.titulo),
    image: image
  }
});


export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}

    