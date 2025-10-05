
import { getRecipeBySlug, getAllRecipes } from '@/lib/recipes';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Clock, Users, UtensilsCrossed, BarChart, Info, GlassWater, Sprout } from 'lucide-react';
import FavoriteButton from '@/components/recipes/favorite-button';
import ShareButton from '@/components/recipes/share-button';
import PrintButton from '@/components/recipes/print-button';
import type { Recipe } from '@/lib/types';

export async function generateStaticParams() {
  const recipes = getAllRecipes();
  return recipes.map(recipe => ({
    slug: recipe.id,
  }));
}

type RecipePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: RecipePageProps) {
  const recipe = getRecipeBySlug(params.slug);
  if (!recipe) {
    return {
      title: 'Receita não encontrada',
    };
  }
  return {
    title: `${recipe.titulo} | Delícias Natalinas`,
    description: `Aprenda a fazer ${recipe.titulo}. Ingredientes, modo de preparo e dicas para sua ceia de Natal.`,
    openGraph: {
      images: [recipe.image.imageUrl]
    }
  };
}

const RecipeJsonLd = ({ recipe }: { recipe: Recipe }) => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.titulo,
    "image": [recipe.image.imageUrl],
    "author": {
      "@type": "Person",
      "name": "Delícias Natalinas"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "description": `Aprenda a fazer ${recipe.titulo}.`,
    "prepTime": `PT${recipe.tempo_preparo.replace(/\D/g, 'M')}`,
    "recipeYield": recipe.rendimento,
    "recipeCategory": recipe.categoria,
    "recipeCuisine": "Natalina",
    "recipeIngredient": recipe.ingredientes.flatMap(group => group.itens),
    "recipeInstructions": recipe.modo_preparo.flatMap(group =>
      group.passos.map((step, index) => ({
        "@type": "HowToStep",
        "text": `${group.secao ? group.secao + ': ' : ''}${step}`,
        "position": index + 1
      }))
    ),
    "keywords": `receita, natal, ${recipe.titulo}, ${recipe.categoria}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipeBySlug(params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <RecipeJsonLd recipe={recipe} />
      <div className="print-container max-w-4xl mx-auto bg-card p-4 sm:p-8 rounded-lg shadow-lg">
        <div className="print-content">
          
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6 no-print">
            <Image
              src={recipe.image.imageUrl}
              alt={recipe.titulo}
              fill
              className="object-cover"
              data-ai-hint={recipe.image.imageHint}
            />
          </div>

          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary print-title">{recipe.titulo}</h1>
            <div className="flex items-center gap-2 no-print">
              <FavoriteButton recipeId={recipe.id} />
              <ShareButton recipe={recipe} />
              <PrintButton />
            </div>
          </div>
          
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="secondary">{recipe.categoria}</Badge>
            <Badge variant="outline">{recipe.subcategoria}</Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
            <div className="bg-secondary/50 p-3 rounded-lg">
              <Clock className="mx-auto mb-1 h-6 w-6 text-primary" />
              <p className="font-semibold text-sm">{recipe.tempo_preparo}</p>
            </div>
            <div className="bg-secondary/50 p-3 rounded-lg">
              <Users className="mx-auto mb-1 h-6 w-6 text-primary" />
              <p className="font-semibold text-sm">{recipe.rendimento}</p>
            </div>
            <div className="bg-secondary/50 p-3 rounded-lg">
              <BarChart className="mx-auto mb-1 h-6 w-6 text-primary" />
              <p className="font-semibold text-sm capitalize">{recipe.dificuldade}</p>
            </div>
            <div className="bg-secondary/50 p-3 rounded-lg">
              <GlassWater className="mx-auto mb-1 h-6 w-6 text-primary" />
              <p className="font-semibold text-sm capitalize">{recipe.indicacao_alcool}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-headline"><UtensilsCrossed />Ingredientes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recipe.ingredientes.map((group, index) => (
                    <div key={index}>
                      {recipe.ingredientes.length > 1 && <h3 className="font-semibold text-primary">{group.secao}</h3>}
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {group.itens.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {recipe.alergenos.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-headline"><Info />Alergênicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{recipe.alergenos.join(', ')}.</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-headline"><ChefHat />Modo de Preparo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   {recipe.modo_preparo.map((group, index) => (
                    <div key={index}>
                      {recipe.modo_preparo.length > 1 && <h3 className="font-semibold text-primary">{group.secao}</h3>}
                      <ol className="list-decimal list-inside space-y-3">
                        {group.passos.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-muted-foreground">{step}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {recipe.sugestoes_apresentacao && (
                 <Card>
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-xl font-headline"><Sprout />Sugestão de Apresentação</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-muted-foreground">{recipe.sugestoes_apresentacao}</p>
                 </CardContent>
               </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
