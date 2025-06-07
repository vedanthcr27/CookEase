import React, { useState, useEffect } from 'react';
import { BookmarkCheck } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import CategoryFilter from '../components/CategoryFilter';
import { useUser } from '../context/UserContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SavedRecipes: React.FC = () => {
  const { savedRecipes, isLoading } = useUser();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  // Filter recipes by selected category
  const filteredRecipes = selectedCategory === 'All'
    ? savedRecipes
    : savedRecipes.filter(recipe => recipe.categories.includes(selectedCategory));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">Your Saved Recipes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View and manage all your favorite recipes that you've saved for later.
          </p>
        </div>

        {savedRecipes.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-800 mb-4">Filter by category</h2>
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            
            {selectedCategory !== 'All' && filteredRecipes.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600">No saved recipes found in the "{selectedCategory}" category.</p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <BookmarkCheck size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">No saved recipes yet</h3>
            <p className="text-gray-600 mb-6">You haven't saved any recipes yet. Browse recipes and click the bookmark icon to save your favorites.</p>
            <a href="/recipes" className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors">
              Discover Recipes
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedRecipes;