import Link from 'next/link';
import Image from 'next/image';
import type { Recipe } from '@/lib/types';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BarChart } from 'lucide-react';

type RecipeCardProps = {
  recipe: Recipe;
  image?: ImagePlaceholder;
};

export default function RecipeCard({ recipe, image }: RecipeCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/receitas/${recipe.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="aspect-video relative">
            {image ? (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground">Sem Imagem</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <Badge variant="secondary" className="mb-2">{recipe.categoria}</Badge>
            <CardTitle className="text-lg font-headline leading-tight">{recipe.titulo}</CardTitle>
          </div>
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
