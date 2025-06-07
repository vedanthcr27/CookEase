import { Recipe } from '../types/recipe';
import { recipes } from '../data/recipes';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

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
      await delay(300); // Simulate network delay
      return { data: recipes };
    },

    getById: async (id: string): Promise<ApiResponse<Recipe | null>> => {
      await delay(200);
      const recipe = recipes.find(r => r.id === id);
      if (!recipe) {
        return { data: null, error: 'Recipe not found' };
      }
      return { data: recipe };
    },

    searchByIngredients: async (ingredients: string[]): Promise<ApiResponse<Recipe[]>> => {
      await delay(400);
      const searchTerms = ingredients.map(ing => ing.toLowerCase());
      const matchingRecipes = recipes.filter(recipe => 
        recipe.ingredients.some(ingredient => 
          searchTerms.some(term => 
            ingredient.toLowerCase().includes(term)
          )
        )
      );
      return { data: matchingRecipes };
    },
  },

  // Auth endpoints
  auth: {
    login: async (email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
      await delay(500);
      
      const user = findUser(email);
      if (!user) {
        return { 
          data: { token: '', user: null }, 
          error: 'User not found' 
        };
      }

      if (user.password !== password) {
        return { 
          data: { token: '', user: null }, 
          error: 'Invalid password' 
        };
      }

      // Store token and current user email
      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('currentUserEmail', email);

      const userData = {
        id: '1',
        name: user.name,
        email: user.email,
        avatar: getRandomProfileImage(user.name)
      };

      // Store the complete user data
      localStorage.setItem('user', JSON.stringify(userData));

      return {
        data: {
          token: 'mock-jwt-token',
          user: userData
        }
      };
    },

    signup: async (name: string, email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
      await delay(500);
      
      const existingUser = findUser(email);
      if (existingUser) {
        return { 
          data: { token: '', user: null }, 
          error: 'User already exists' 
        };
      }

      saveUser({ name, email, password });

      // Store token and current user email
      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('currentUserEmail', email);

      const userData = {
        id: '1',
        name: name,
        email: email,
        avatar: getRandomProfileImage(name)
      };

      // Store the complete user data
      localStorage.setItem('user', JSON.stringify(userData));

      return {
        data: {
          token: 'mock-jwt-token',
          user: userData
        }
      };
    },
  },

  // User endpoints
  user: {
    getSavedRecipes: async (): Promise<ApiResponse<Recipe[]>> => {
      await delay(300);
      const token = localStorage.getItem('token');
      if (!token) {
        return { data: [], error: 'Not authenticated' };
      }

      // Get user email from token (in a real app, this would be decoded from JWT)
      const userEmail = localStorage.getItem('currentUserEmail');
      if (!userEmail) {
        return { data: [], error: 'User not found' };
      }

      const savedRecipeIds = getSavedRecipes(userEmail);
      const savedRecipes = recipes.filter(recipe => savedRecipeIds.includes(recipe.id));
      return { data: savedRecipes };
    },

    saveRecipe: async (recipeId: string): Promise<ApiResponse<void>> => {
      await delay(200);
      const token = localStorage.getItem('token');
      if (!token) {
        return { data: undefined, error: 'Not authenticated' };
      }

      const userEmail = localStorage.getItem('currentUserEmail');
      if (!userEmail) {
        return { data: undefined, error: 'User not found' };
      }

      saveRecipeForUser(userEmail, recipeId);
      return { data: undefined };
    },

    unsaveRecipe: async (recipeId: string): Promise<ApiResponse<void>> => {
      await delay(200);
      const token = localStorage.getItem('token');
      if (!token) {
        return { data: undefined, error: 'Not authenticated' };
      }

      const userEmail = localStorage.getItem('currentUserEmail');
      if (!userEmail) {
        return { data: undefined, error: 'User not found' };
      }

      unsaveRecipeForUser(userEmail, recipeId);
      return { data: undefined };
    },
  },
}; 