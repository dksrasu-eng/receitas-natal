
import recipesData from '@/data/recipes.json';
import type { Recipe, RawRecipe } from './types';
import { slugify } from './utils';
import { placeholderImages } from './placeholder-images';

// Create a Map for efficient image lookup by foto_id
const imagesMap = new Map(placeholderImages.map(img => [img.id, img]));

const allRecipes: Recipe[] = (recipesData as RawRecipe[]).map(rawRecipe => {
  const slug = slugify(rawRecipe.titulo);
  // Find the corresponding image using the slugified title, which matches the image ID
  const image = imagesMap.get(slug) || {
    id: 'placeholder',
    imageUrl: `https://placehold.co/600x400/F5E9EB/B83B5E?text=${encodeURIComponent(rawRecipe.titulo)}`,
    description: `Placeholder image for ${rawRecipe.titulo}`,
    imageHint: 'recipe placeholder',
  };

  // The foto_id is no longer needed in the final object, so we destructure it out.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { foto_id, ...restOfRecipe } = rawRecipe;

  // Return the final recipe object with the correct image and a URL-friendly id
  return {
    ...restOfRecipe,
    id: slug,
    image,
  };
});

export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
