import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'All',
    'Breakfast',
    'Lunch',
    'Dinner',
    'Appetizer',
    'Dessert',
    'Snack',
    'Vegetarian',
    'Vegan',
    'Non-vegetarian',
    'Quick Meals',
    'Indian',
    'Italian',
    'Mexican',
    'Asian'
  ];

  // Reset to 'All' category when component mounts
  useEffect(() => {
    setSelectedCategory('All');
  }, []);

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;