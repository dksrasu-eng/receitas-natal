
import recipesData from '@/data/recipes.json';
import type { Recipe, RawRecipe } from './types';
import { slugify } from './utils';
import { placeholderImages } from './placeholder-images';

const imagesMap = new Map(placeholderImages.map(img => [img.id, img]));

const allRecipes: Recipe[] = (recipesData as RawRecipe[]).map(rawRecipe => {
  const image = imagesMap.get(rawRecipe.foto_id) || {
    id: 'placeholder',
    imageUrl: `https://placehold.co/600x400/F5E9EB/B83B5E?text=${encodeURIComponent(rawRecipe.titulo)}`,
    description: `Placeholder image for ${rawRecipe.titulo}`,
    imageHint: 'recipe placeholder',
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: rawId, foto_id, ...restOfRecipe } = rawRecipe;

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
