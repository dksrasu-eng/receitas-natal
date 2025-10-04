import recipesData from '@/data/recipes.json';
import type { Recipe, RawRecipe } from './types';
import { slugify } from './utils';
import { PlaceHolderImages } from './placeholder-images';

// Create a Map for efficient image lookup by foto_id
const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

const allRecipes: Recipe[] = (recipesData as RawRecipe[]).map(rawRecipe => {
  // Find the corresponding image using the foto_id from the recipe
  const image = imagesMap.get(rawRecipe.foto_id) || {
    id: 'placeholder',
    imageUrl: `https://placehold.co/600x400/F5E9EB/B83B5E?text=${encodeURIComponent(rawRecipe.titulo)}`,
    description: `Placeholder image for ${rawRecipe.titulo}`,
    imageHint: 'recipe placeholder',
  };

  // The foto_id is no longer needed in the final object, so we destructure it out.
  const { foto_id, ...restOfRecipe } = rawRecipe;

  // Return the final recipe object with the correct image and a URL-friendly id
  return {
    ...restOfRecipe,
    id: slugify(rawRecipe.titulo),
    image: image,
  };
});

export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
