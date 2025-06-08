import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe } from '../types/recipe';
import { api } from '../services/api';
import { useAuth } from './AuthContext';
import { recipes as mockRecipes } from '../data/recipes';

interface UserContextType {
  savedRecipes: Recipe[];
  isSaved: (recipeId: string) => boolean;
  toggleSaveRecipe: (recipe: Recipe) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      loadSavedRecipes();
    } else {
      setSavedRecipes([]);
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  const loadSavedRecipes = async () => {
    try {
      setIsLoading(true);
      const response = await api.user.getSavedRecipes();
      if (response.error) {
        setError(response.error);
      } else {
        // Convert saved recipe IDs to full recipe objects
        const savedRecipeIds = response.data;
        const savedRecipes = mockRecipes.filter(recipe => savedRecipeIds.includes(recipe.id));
        setSavedRecipes(savedRecipes);
      }
    } catch (err) {
      setError('Failed to load saved recipes');
    } finally {
      setIsLoading(false);
    }
  };

  const isSaved = (recipeId: string): boolean => {
    return savedRecipes.some(recipe => recipe.id === recipeId);
  };

  const toggleSaveRecipe = async (recipe: Recipe) => {
    if (!isAuthenticated) {
      setError('Please log in to save recipes');
      return;
    }

    try {
      if (isSaved(recipe.id)) {
        const response = await api.user.unsaveRecipe(recipe.id);
        if (response.error) {
          throw new Error(response.error);
        }
        setSavedRecipes(prev => prev.filter(r => r.id !== recipe.id));
      } else {
        const response = await api.user.saveRecipe(recipe.id);
        if (response.error) {
          throw new Error(response.error);
        }
        setSavedRecipes(prev => [...prev, recipe]);
      }
    } catch (err) {
      setError('Failed to update saved recipes');
    }
  };

  return (
    <UserContext.Provider value={{ 
      savedRecipes, 
      isSaved, 
      toggleSaveRecipe,
      isLoading,
      error
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};