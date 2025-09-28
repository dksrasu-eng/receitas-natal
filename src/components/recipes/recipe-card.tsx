import Link from 'next/link';
import Image from 'next/image';
import type { Recipe } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const image = PlaceHolderImages.find(img => img.id === recipe.id);
  
    return (
    <Card className="h-full flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/receitas/${recipe.id}`} className="flex flex-col h-full">
        {image && (
          <div className="relative w-full h-48">
            <Image
              src={image.imageUrl}
              alt={recipe.titulo}
              fill
              style={{ objectFit: 'cover' }}
              className="bg-muted"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardHeader className="p-4">
            <Badge variant="secondary" className="mb-2 w-fit">{recipe.categoria}</Badge>
            <CardTitle className="text-lg font-headline leading-tight">{recipe.titulo}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          {/* Pode adicionar uma breve descrição aqui se houver */}
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.tempo_preparo}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart className="w-4 h-4" />
            <span className="capitalize">{recipe.dificuldade}</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}

    