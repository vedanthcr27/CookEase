import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Search, Clock, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import RecipeCard from '../components/RecipeCard';
import CategoryFilter from '../components/CategoryFilter';
import { useRecipes } from '../context/RecipeContext';

const Home: React.FC = () => {
  const { recipes } = useRecipes();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Memoize filtered recipes to prevent unnecessary recalculations
  const displayedRecipes = useMemo(() => {
    if (selectedCategory === 'All') {
      return recipes;
    }
    return recipes.filter(recipe => recipe.categories.includes(selectedCategory));
  }, [selectedCategory, recipes]);

  // Extract featured recipes (first 3 recipes)
  const featuredRecipes = useMemo(() => recipes.slice(0, 3), [recipes]);

  const handleRecipeClick = (recipeId: string) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[60vh] md:h-[80vh] overflow-hidden"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-serif mb-4 sm:mb-6 leading-tight">
              Discover the Art of Indian Cooking
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Explore authentic Indian recipes, cooking tips, and culinary traditions. From street food to royal feasts, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/recipes"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-center"
              >
                Browse Recipes
              </Link>
              <Link
                to="/search"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-center backdrop-blur-sm"
              >
                Search by Ingredients
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Recipes */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Featured Recipes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the most popular and delicious Indian recipes, perfect for any occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map(recipe => (
              <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect recipe for any meal or occasion with our easy-to-use category filter.
            </p>
          </div>
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {displayedRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                onClick={() => handleRecipeClick(recipe.id)}
                className="transform transition-transform hover:scale-105"
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
          {displayedRecipes.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-600 text-lg">No recipes found in the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-4">
              Why Choose CookEase?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make Indian cooking accessible, enjoyable, and delicious for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Quick & Easy</h3>
              <p className="text-gray-600">
                Find recipes that fit your schedule, from 15-minute meals to weekend feasts.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Join a community of food lovers sharing recipes, tips, and experiences.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <ChefHat className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Learn from experienced chefs and home cooks with detailed instructions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;