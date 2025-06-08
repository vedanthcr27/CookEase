import { Recipe } from '../types/recipe';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper functions for user management
const getUsers = (): { email: string; password: string; name: string }[] => {
  const users = localStorage.getItem('mockUsers');
  return users ? JSON.parse(users) : [];
};

const saveUser = (user: { email: string; password: string; name: string }) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('mockUsers', JSON.stringify(users));
};

const findUser = (email: string) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

// Random profile images
const maleProfileImages = [
  'https://api.dicebear.com/7.x/identicon/svg?seed=John&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Mike&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=David&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=James&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Robert&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=William&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Thomas&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Daniel&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Paul&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Mark&backgroundColor=ffdfbf'
];

const femaleProfileImages = [
  'https://api.dicebear.com/7.x/identicon/svg?seed=Sarah&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Emma&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Olivia&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Isabella&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Ava&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Mia&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Charlotte&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Amelia&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Harper&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/identicon/svg?seed=Evelyn&backgroundColor=ffdfbf'
];

const getRandomProfileImage = (name: string) => {
  // Use the first letter of the name to determine gender (just for demo purposes)
  const firstLetter = name.charAt(0).toLowerCase();
  const isMale = firstLetter <= 'm';
  const images = isMale ? maleProfileImages : femaleProfileImages;
  return images[Math.floor(Math.random() * images.length)];
};

// Helper functions for saved recipes management
const getSavedRecipes = (email: string): string[] => {
  const savedRecipes = localStorage.getItem(`savedRecipes_${email}`);
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

const saveRecipeForUser = (email: string, recipeId: string) => {
  const savedRecipes = getSavedRecipes(email);
  if (!savedRecipes.includes(recipeId)) {
    savedRecipes.push(recipeId);
    localStorage.setItem(`savedRecipes_${email}`, JSON.stringify(savedRecipes));
  }
};

const unsaveRecipeForUser = (email: string, recipeId: string) => {
  const savedRecipes = getSavedRecipes(email);
  const updatedRecipes = savedRecipes.filter(id => id !== recipeId);
  localStorage.setItem(`savedRecipes_${email}`, JSON.stringify(updatedRecipes));
};

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