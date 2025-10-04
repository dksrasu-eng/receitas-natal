import recipesData from '@/data/recipes.json';
import type { Recipe } from './types';
import { slugify } from './utils';
import { PlaceHolderImages } from './placeholder-images';


const allRecipes: Recipe[] = (recipesData as Omit<Recipe, 'id' | 'image'>[]).map(recipe => {
  const image = PlaceHolderImages.find(img => img.id === recipe.foto_id);
  
  return {
    ...recipe,
    id: slugify(recipe.titulo),
    image: image || {
      id: 'placeholder',
      imageUrl: 'https://placehold.co/600x400/F5E9EB/B83B5E?text=Receita',
      description: 'Imagem de receita',
      imageHint: 'recipe placeholder',
    },
  }
});


export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === slug);
}
