import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe } from '../types/recipe';
import { mockRecipes } from '../mockData';

interface RecipeContextType {
  recipes: Recipe[];
  getRecipeById: (id: string) => Promise<Recipe | undefined>;
  findRecipesByIngredients: (ingredients: string[]) => Promise<Recipe[]>;
  isLoading: boolean;
  error: string | null;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes] = useState<Recipe[]>(mockRecipes);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  // Get recipe by ID
  const getRecipeById = async (id: string): Promise<Recipe | undefined> => {
    return recipes.find(recipe => recipe.id === id);
  };

  // Find recipes based on available ingredients
  const findRecipesByIngredients = async (ingredients: string[]): Promise<Recipe[]> => {
    return recipes.filter(recipe => 
      ingredients.some(ingredient => 
        recipe.ingredients.some(recipeIngredient => 
          recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
        )
      )
    );
  };

  return (
    <RecipeContext.Provider value={{ 
      recipes, 
      getRecipeById, 
      findRecipesByIngredients,
      isLoading,
      error
    }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};