import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { useRecipes } from '../context/RecipeContext';
import { useUser } from '../context/UserContext';
import CookingTimer from '../components/CookingTimer';
import { Recipe } from '../types/recipe';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getRecipeById } = useRecipes();
  const { isSaved, toggleSaveRecipe } = useUser();
  const [showTimer, setShowTimer] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipe = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const recipe = await getRecipeById(id);
        if (recipe) {
          setRecipe(recipe);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError('Failed to load recipe');
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipe();
  }, [id, getRecipeById]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
            <p className="text-gray-600">{error || "The recipe you're looking for doesn't exist."}</p>
          </div>
        </div>
      </div>
    );
  }

  const saved = isSaved(recipe.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Recipe Header */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                    {recipe.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/90">
                    <span className="flex items-center gap-1">
                      <Clock size={18} />
                      {recipe.cookTime} mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={18} />
                      {recipe.servings} servings
                    </span>
                    <span className="flex items-center gap-1">
                      <ChefHat size={18} />
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleSaveRecipe(recipe)}
                  className="text-white hover:text-orange-300 transition-colors self-start sm:self-auto"
                >
                  {saved ? <BookmarkCheck size={32} /> : <BookmarkPlus size={32} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Ingredients */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-600">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Instructions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                  {recipe.cookTime && (
                    <div className="mt-8 border-t pt-6">
                      <button
                        onClick={() => setShowTimer(!showTimer)}
                        className="w-full py-3 px-4 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Clock size={20} />
                        {showTimer ? 'Hide Cooking Timer' : 'Show Cooking Timer'}
                      </button>
                      {showTimer && (
                        <div className="mt-4">
                          <CookingTimer duration={recipe.cookTime} />
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-orange-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recipe Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.categories?.map((category: string) => (
                          <span
                            key={category}
                            className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Cuisine</h4>
                      <p className="text-gray-600">{recipe.cuisine}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Dietary</h4>
                      <p className="text-gray-600">{recipe.dietary}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nutrition</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {recipe.nutrition && Object.entries(recipe.nutrition).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-lg p-2">
                            <p className="text-sm text-gray-500">{key}</p>
                            <p className="font-medium text-gray-800">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipePage;