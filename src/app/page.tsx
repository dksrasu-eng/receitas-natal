import { Suspense } from 'react';
import { getAllRecipes } from '@/lib/recipes';
import RecipeCard from '@/components/recipes/recipe-card';
import Filters from '@/components/recipes/filters';
import Pagination from '@/components/recipes/pagination';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const dynamic = 'force-dynamic';

type HomeProps = {
  searchParams?: {
    q?: string;
    categoria?: string;
    dificuldade?: string;
    tempo?: string;
    alcool?: string;
    page?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const query = searchParams?.q?.toLowerCase() || '';
  const category = searchParams?.categoria || 'all';
  const difficulty = searchParams?.dificuldade || 'all';
  const time = parseInt(searchParams?.tempo || '0', 10);
  const alcohol = searchParams?.alcool || 'all';
  const currentPage = Number(searchParams?.page) || 1;

  const allRecipes = getAllRecipes();
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesQuery = query
      ? recipe.titulo.toLowerCase().includes(query) ||
        recipe.ingredientes.some(group =>
          group.itens.some(item => item.toLowerCase().includes(query))
        )
      : true;

    const matchesCategory = category !== 'all' ? recipe.categoria === category : true;
    const matchesDifficulty = difficulty !== 'all' ? recipe.dificuldade === difficulty : true;
    
    const recipeTime = parseInt(recipe.tempo_preparo.split(' ')[0], 10);
    const matchesTime = time > 0 ? recipeTime <= time : true;
    
    const matchesAlcohol = alcohol !== 'all' ? (
      alcohol === 'com' ? recipe.indicacao_alcool === 'com álcool' : recipe.indicacao_alcool === 'sem álcool'
    ) : true;

    return matchesQuery && matchesCategory && matchesDifficulty && matchesTime && matchesAlcohol;
  });

  const RECIPES_PER_PAGE = 12;
  const totalPages = Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE);
  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * RECIPES_PER_PAGE,
    currentPage * RECIPES_PER_PAGE
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Delícias Natalinas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore 100 receitas incríveis para tornar sua celebração de Natal ainda mais especial. Encontre o prato perfeito para sua ceia!
        </p>
      </div>

      <Suspense fallback={<div>Carregando filtros...</div>}>
        <Filters />
      </Suspense>
      
      {paginatedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedRecipes.map(recipe => {
            const image = imageMap.get(recipe.foto_id);
            return (
              <RecipeCard key={recipe.id} recipe={recipe} image={image} />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">Nenhuma receita encontrada com os filtros selecionados.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
