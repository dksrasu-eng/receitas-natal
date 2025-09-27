'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Recipe } from '@/lib/types';

type ShareButtonProps = {
  recipe: Recipe;
};

export default function ShareButton({ recipe }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: `Delícias Natalinas: ${recipe.titulo}`,
      text: `Confira esta deliciosa receita de ${recipe.titulo}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      // Fallback para copiar o link
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          description: "Link da receita copiado para a área de transferência!",
        });
      } catch (err) {
        console.error('Falha ao copiar o link:', err);
        toast({
          variant: 'destructive',
          title: "Erro",
          description: "Não foi possível copiar o link.",
        });
      }
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleShare} className="no-print">
      <Share2 className="w-6 h-6 text-muted-foreground" />
      <span className="sr-only">Compartilhar receita</span>
    </Button>
  );
}
