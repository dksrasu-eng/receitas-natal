'use client';

import { useState, useEffect } from 'react';
import { getAllRecipes } from '@/lib/recipes';
import type { Recipe } from '@/lib/types';
import RecipeCard from '@/components/recipes/recipe-card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Heart } from 'lucide-react';

export default function FavoritosPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const allRecipes = getAllRecipes();
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorite_recipes');
    if (storedFavorites) {
      const favoriteIds: string[] = JSON.parse(storedFavorites);
      const recipes = allRecipes.filter(recipe => favoriteIds.includes(recipe.id));
      setFavoriteRecipes(recipes);
    }
    setIsLoading(false);
  }, [allRecipes]);

  if (isLoading) {
    return (
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Meus Favoritos</h1>
        <p>Carregando suas receitas favoritas...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Meus Favoritos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Aqui estão as receitas que você marcou como favoritas. Volte sempre para se inspirar!
        </p>
      </div>
      
      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteRecipes.map(recipe => {
             const image = imageMap.get(recipe.foto_id);
             return (
               <RecipeCard key={recipe.id} recipe={recipe} image={image} />
             );
          })}
        </div>
      ) : (
        <div className="text-center py-16 flex flex-col items-center space-y-4">
          <Heart className="w-16 h-16 text-muted" />
          <h2 className="text-2xl font-semibold">Nenhuma receita favorita ainda</h2>
          <p className="text-lg text-muted-foreground">
            Explore as receitas e clique no coração para salvá-las aqui.
          </p>
        </div>
      )}
    </div>
  );
}
