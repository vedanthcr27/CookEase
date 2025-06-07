export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  categories: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
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