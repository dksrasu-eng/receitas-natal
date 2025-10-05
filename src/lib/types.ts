
import type { ImagePlaceholder } from "./placeholder-images";

export interface IngredientItem {
  secao: string;
  itens: string[];
}

export interface PreparationStep {
  secao: string;
  passos: string[];
}

// The raw recipe data from the JSON file.
export interface RawRecipe {
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
  foto_id: string;
}

// The final, processed recipe object used throughout the app.
export interface Recipe {
  id: string; // The final, URL-friendly ID
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
