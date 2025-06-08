import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Recipe } from '../types/recipe';
import { api } from '../services/api';
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
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      setIsLoading(true);
      // Use mock data for recipes
      setRecipes(mockRecipes);
    } catch (err) {
      setError('Failed to load recipes');
    } finally {
      setIsLoading(false);
    }
  };

  // Get recipe by ID
  const getRecipeById = async (id: string): Promise<Recipe | undefined> => {
    try {
      // Use mock data for recipes
      return mockRecipes.find(recipe => recipe.id === id);
    } catch (err) {
      setError('Failed to fetch recipe');
      return undefined;
    }
  };

  // Find recipes based on available ingredients
  const findRecipesByIngredients = async (ingredients: string[]): Promise<Recipe[]> => {
    try {
      // Use mock data for recipes
      return mockRecipes.filter(recipe => 
        ingredients.some(ingredient => 
          recipe.ingredients.some(recipeIngredient => 
            recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        )
      );
    } catch (err) {
      setError('Failed to search recipes');
      return [];
    }
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