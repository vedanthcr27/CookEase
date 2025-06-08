export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  cookTime?: number;
  servings?: number;
  categories?: string[];
  nutrition?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  cuisine?: string;
  difficulty?: string;
  time?: string;
  dietary?: string;
}