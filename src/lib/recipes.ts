import recipesData from '@/data/recipes.json';
import type { Recipe } from './types';
import { slugify } from './utils';
import { PlaceHolderImages } from './placeholder-images';

// Create a map of image placeholders by their ID for quick lookup
const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

const allRecipes: Recipe[] = recipesData.map(recipe => {
  const recipeId = slugify(recipe.titulo);
  const image = imagesMap.get(recipe.foto_id) || {
    id: 'placeholder',
    imageUrl: `https://placehold.co/600x400/F5E9EB/B83B5E?text=${encodeURIComponent(recipe.titulo)}`,
    description: 'Imagem de receita placeholder',
    imageHint: 'recipe placeholder',
  };

  // The original recipe data from JSON doesn't have 'id' and 'image' properties.
  // We remove 'foto_id' and add the ones we've created.
  const { foto_id, ...restOfRecipe } = recipe;

  return {
    ...restOfRecipe,
    id: recipeId,
    image: image,
  };
});

export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
