import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';
import IngredientSelector from '../components/IngredientSelector';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/RecipeCard';
import { useRecipes } from '../context/RecipeContext';
import { Recipe } from '../types/recipe';

const SearchByIngredient: React.FC = () => {
  const { recipes, findRecipesByIngredients } = useRecipes();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [matchedRecipes, setMatchedRecipes] = useState<Recipe[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Find recipes when ingredients change
  useEffect(() => {
    if (selectedIngredients.length > 0) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(async () => {
        try {
          let results = await findRecipesByIngredients(selectedIngredients);
          
          if (selectedCategory !== 'All') {
            results = results.filter(recipe => 
              recipe.categories.includes(selectedCategory)
            );
          }
          
          setMatchedRecipes(results);
        } catch (error) {
          console.error('Error searching recipes:', error);
        } finally {
          setIsSearching(false);
        }
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setMatchedRecipes([]);
    }
  }, [selectedIngredients, selectedCategory, findRecipesByIngredients]);

  return (
    <div className="py-12 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">Find Recipes By Ingredients</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Tell us what ingredients you have, and we'll find recipes you can make right now.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">What's in your kitchen?</h2>
          <IngredientSelector 
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
        </div>
        
        {selectedIngredients.length > 0 && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray-800 mb-4">Filter by category</h2>
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-gray-800">
                  {isSearching 
                    ? 'Searching for recipes...' 
                    : matchedRecipes.length > 0 
                      ? `Found ${matchedRecipes.length} recipes` 
                      : 'No matching recipes found'}
                </h2>
              </div>
              
              {isSearching ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                </div>
              ) : matchedRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {matchedRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              ) : selectedIngredients.length > 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <Utensils size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No matching recipes found</h3>
                  <p className="text-gray-600 mb-4">Try selecting different ingredients or fewer ingredients to get more results.</p>
                </div>
              )}
            </div>
          </>
        )}
        
        {selectedIngredients.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Utensils size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Start by adding some ingredients</h3>
            <p className="text-gray-600">Add ingredients you have in your kitchen, and we'll find recipes that match.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchByIngredient;