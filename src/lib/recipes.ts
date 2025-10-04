import recipesData from '@/data/recipes.json';
import type { Recipe, RawRecipe } from './types';
import { slugify } from './utils';
import { PlaceHolderImages } from './placeholder-images';

// Create a Map for efficient image lookup by foto_id
const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

const allRecipes: Recipe[] = (recipesData as RawRecipe[]).map(recipe => {
  // Find the corresponding image using the foto_id
  const image = imagesMap.get(recipe.foto_id) || {
    id: 'placeholder',
    imageUrl: `https://placehold.co/600x400/F5E9EB/B83B5E?text=${encodeURIComponent(recipe.titulo)}`,
    description: `Placeholder image for ${recipe.titulo}`,
    imageHint: 'recipe placeholder',
  };

  // Return the final recipe object with the correct image and a URL-friendly id
  return {
    ...recipe,
    id: slugify(recipe.titulo), 
    image: image,
  };
});

export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
