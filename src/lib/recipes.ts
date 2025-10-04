import recipesData from '@/data/recipes.json';
import type { Recipe, RawRecipe } from './types';
import { slugify } from './utils';
import { PlaceHolderImages } from './placeholder-images';

const imagesMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

const allRecipes: Recipe[] = (recipesData as RawRecipe[]).map(recipe => {
  const image = imagesMap.get(recipe.foto_id) || {
    id: 'placeholder',
    imageUrl: `https://placehold.co/600x400/F5E9EB/B83B5E?text=${encodeURIComponent(recipe.titulo)}`,
    description: `Placeholder image for ${recipe.titulo}`,
    imageHint: 'recipe placeholder',
  };

  const { foto_id, ...restOfRecipe } = recipe;
  
  return {
    ...restOfRecipe,
    id: slugify(recipe.titulo), // Keep slugify for URL-friendly IDs
    image: image,
  };
});

export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
