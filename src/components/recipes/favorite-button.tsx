'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type FavoriteButtonProps = {
  recipeId: string;
};

export default function FavoriteButton({ recipeId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite_recipes') || '[]');
    setIsFavorite(favorites.includes(recipeId));
  }, [recipeId]);

  const toggleFavorite = () => {
    let favorites: string[] = JSON.parse(localStorage.getItem('favorite_recipes') || '[]');
    const wasFavorite = favorites.includes(recipeId);

    if (wasFavorite) {
      favorites = favorites.filter(id => id !== recipeId);
      toast({
        description: "Receita removida dos favoritos.",
      });
    } else {
      favorites.push(recipeId);
       toast({
        description: "Receita adicionada aos favoritos!",
      });
    }

    localStorage.setItem('favorite_recipes', JSON.stringify(favorites));
    setIsFavorite(!wasFavorite);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleFavorite} className="no-print">
      <Heart className={cn("w-6 h-6", isFavorite ? 'text-primary fill-current' : 'text-muted-foreground')} />
      <span className="sr-only">Favoritar receita</span>
    </Button>
  );
}
