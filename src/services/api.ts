import { Recipe } from '../types/recipe';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

export const api = {
  // Recipe endpoints
  recipes: {
    getAll: async (): Promise<ApiResponse<Recipe[]>> => {
      try {
        const res = await fetch(`${API_URL}/recipes`);
        if (!res.ok) throw new Error('Failed to fetch recipes');
        const data = await res.json();
        return { data };
      } catch (error: any) {
        return { data: [], error: error.message };
      }
    },

    getById: async (id: string): Promise<ApiResponse<Recipe | null>> => {
      try {
        const res = await fetch(`${API_URL}/recipes/${id}`);
        if (!res.ok) throw new Error('Recipe not found');
        const data = await res.json();
        return { data };
      } catch (error: any) {
        return { data: null, error: error.message };
      }
    },

    searchByIngredients: async (ingredients: string[]): Promise<ApiResponse<Recipe[]>> => {
      try {
        const res = await fetch(`${API_URL}/recipes/search`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ingredients }),
        });
        if (!res.ok) throw new Error('Failed to search recipes');
        const data = await res.json();
        return { data };
      } catch (error: any) {
        return { data: [], error: error.message };
      }
    },
  },

  // Auth endpoints
  auth: {
    login: async (email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
      try {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Login failed');
        }
        const data = await res.json();
        return { data };
      } catch (error: any) {
        return { data: { token: '', user: null }, error: error.message };
      }
    },

    signup: async (name: string, email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
      try {
        const res = await fetch(`${API_URL}/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Signup failed');
        }
        const data = await res.json();
        return { data };
      } catch (error: any) {
        return { data: { token: '', user: null }, error: error.message };
      }
    },
  },

  // User endpoints
  user: {
    getSavedRecipes: async (): Promise<ApiResponse<Recipe[]>> => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_URL}/user/saved-recipes`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to fetch saved recipes');
        const data = await res.json();
        return { data };
      } catch (error: any) {
        return { data: [], error: error.message };
      }
    },

    saveRecipe: async (recipeId: string): Promise<ApiResponse<void>> => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_URL}/user/save-recipe/${recipeId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to save recipe');
        return { data: undefined };
      } catch (error: any) {
        return { data: undefined, error: error.message };
      }
    },

    unsaveRecipe: async (recipeId: string): Promise<ApiResponse<void>> => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_URL}/user/unsave-recipe/${recipeId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error('Failed to unsave recipe');
        return { data: undefined };
      } catch (error: any) {
        return { data: undefined, error: error.message };
      }
    },
  },
}; 