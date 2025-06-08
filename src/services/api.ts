import { Recipe } from '../types/recipe';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

export const api = {
  // Recipe endpoints
  recipes: {
    getAll: async (): Promise<ApiResponse<Recipe[]>> => {
      try {
        const response = await fetch(`${API_URL}/recipes`);
        const data = await response.json();
        return { data };
      } catch (error) {
        return { data: [], error: 'Failed to fetch recipes' };
      }
    },

    getById: async (id: string): Promise<ApiResponse<Recipe | null>> => {
      try {
        const response = await fetch(`${API_URL}/recipes/${id}`);
        const data = await response.json();
        return { data };
      } catch (error) {
        return { data: null, error: 'Recipe not found' };
      }
    },

    searchByIngredients: async (ingredients: string[]): Promise<ApiResponse<Recipe[]>> => {
      try {
        const response = await fetch(`${API_URL}/recipes/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ingredients }),
        });
        const data = await response.json();
        return { data };
      } catch (error) {
        return { data: [], error: 'Failed to search recipes' };
      }
    },
  },

  // Auth endpoints
  auth: {
    login: async (email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
      try {
        const response = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        return { data };
      } catch (error) {
        return { data: { token: '', user: null }, error: 'Login failed' };
      }
    },

    signup: async (name: string, email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
      try {
        const response = await fetch(`${API_URL}/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        return { data };
      } catch (error) {
        return { data: { token: '', user: null }, error: 'Signup failed' };
      }
    },
  },

  // User endpoints
  user: {
    getSavedRecipes: async (): Promise<ApiResponse<Recipe[]>> => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return { data: [], error: 'Not authenticated' };
        }
        const response = await fetch(`${API_URL}/user/saved-recipes`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        return { data };
      } catch (error) {
        return { data: [], error: 'Failed to fetch saved recipes' };
      }
    },

    saveRecipe: async (recipeId: string): Promise<ApiResponse<void>> => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return { data: undefined, error: 'Not authenticated' };
        }
        await fetch(`${API_URL}/user/save-recipe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ recipeId }),
        });
        return { data: undefined };
      } catch (error) {
        return { data: undefined, error: 'Failed to save recipe' };
      }
    },

    unsaveRecipe: async (recipeId: string): Promise<ApiResponse<void>> => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return { data: undefined, error: 'Not authenticated' };
        }
        await fetch(`${API_URL}/user/unsave-recipe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ recipeId }),
        });
        return { data: undefined };
      } catch (error) {
        return { data: undefined, error: 'Failed to unsave recipe' };
      }
    },
  },
}; 