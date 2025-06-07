import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
      <div className="relative h-40 sm:h-48">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 line-clamp-1">{recipe.title}</h3>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {recipe.cookTime} mins
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ChefHat size={14} />
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-sm sm:text-base text-gray-600 line-clamp-2 mb-3">{recipe.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2">
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
    </div>
  );
};

export default RecipeCard;