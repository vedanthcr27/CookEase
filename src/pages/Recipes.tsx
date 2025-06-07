import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Recipe } from '../types/recipe';
import { useRecipes } from '../context/RecipeContext';

const Recipes: React.FC = () => {
  const { recipes } = useRecipes();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: '',
    difficulty: '',
    time: '',
    dietary: ''
  });
  const navigate = useNavigate();

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = !filters.cuisine || recipe.cuisine === filters.cuisine;
    const matchesDifficulty = !filters.difficulty || recipe.difficulty === filters.difficulty;
    const matchesTime = !filters.time || recipe.time === filters.time;
    const matchesDietary = !filters.dietary || recipe.dietary === filters.dietary;

    return matchesSearch && matchesCuisine && matchesDifficulty && matchesTime && matchesDietary;
  });

  const clearFilters = () => {
    setFilters({
      cuisine: '',
      difficulty: '',
      time: '',
      dietary: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-gray-800"
        >
          Discover Delicious Recipes
        </motion.h1>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors bg-white shadow-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-orange-500 transition-colors shadow-sm"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-800">Filter Recipes</h3>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-orange-500 hover:text-orange-600"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
                      <select
                        value={filters.cuisine}
                        onChange={(e) => setFilters({...filters, cuisine: e.target.value})}
                        className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      >
                        <option value="">All Cuisines</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Asian">Asian</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                      <select
                        value={filters.difficulty}
                        onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
                        className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      >
                        <option value="">All Levels</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <select
                        value={filters.time}
                        onChange={(e) => setFilters({...filters, time: e.target.value})}
                        className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      >
                        <option value="">Any Time</option>
                        <option value="30 mins">Under 30 mins</option>
                        <option value="45 mins">Under 45 mins</option>
                        <option value="60 mins">Under 60 mins</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Dietary</label>
                      <select
                        value={filters.dietary}
                        onChange={(e) => setFilters({...filters, dietary: e.target.value})}
                        className="w-full p-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      >
                        <option value="">All Types</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Non-vegetarian">Non-vegetarian</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Active Filters */}
        {(filters.cuisine || filters.difficulty || filters.time || filters.dietary) && (
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(filters).map(([key, value]) => (
              value && (
                <motion.div
                  key={key}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => setFilters({...filters, [key]: ''})}
                    className="hover:text-orange-900"
                  >
                    <X size={14} />
                  </button>
                </motion.div>
              )
            ))}
          </div>
        )}

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                <div className="relative h-48">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{recipe.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <span>{recipe.cookTime} mins</span>
                      <span>•</span>
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 line-clamp-2">{recipe.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {recipe.categories.slice(0, 3).map(category => (
                      <span
                        key={category}
                        className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">No recipes found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Recipes; 