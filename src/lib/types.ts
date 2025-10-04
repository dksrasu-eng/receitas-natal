import type { ImagePlaceholder } from "./placeholder-images";

export interface IngredientItem {
  secao: string;
  itens: string[];
}

export interface PreparationStep {
  secao: string;
  passos: string[];
}

export interface Recipe {
  id: string;
  titulo: string;
  categoria: 'salgada' | 'doce' | 'bebida';
  subcategoria: string;
  tempo_preparo: string;
  rendimento: string;
  dificuldade: 'fácil' | 'médio' | 'difícil';
  indicacao_alcool: 'com álcool' | 'sem álcool';
  alergenos: string[];
  ingredientes: IngredientItem[];
  modo_preparo: PreparationStep[];
  sugestoes_apresentacao: string;
  image: ImagePlaceholder;
}
