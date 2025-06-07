import React, { useState } from 'react';
import { X, Plus, Search } from 'lucide-react';
import { commonIngredients } from '../data/ingredients';

interface IngredientSelectorProps {
  selectedIngredients: string[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const IngredientSelector: React.FC<IngredientSelectorProps> = ({ 
  selectedIngredients, 
  setSelectedIngredients 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length > 1) {
      const filtered = commonIngredients
        .filter(ingredient => 
          ingredient.toLowerCase().includes(value.toLowerCase()) && 
          !selectedIngredients.includes(ingredient)
        )
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const addIngredient = (ingredient: string) => {
    if (ingredient && !selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
      setInputValue('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue) {
      e.preventDefault();
      addIngredient(suggestions.length > 0 ? suggestions[0] : inputValue);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="flex items-center border-2 border-gray-300 focus-within:border-orange-500 rounded-lg overflow-hidden pl-3 pr-4 py-2">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => inputValue.length > 1 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Add ingredients you have..."
            className="flex-1 outline-none text-gray-700"
          />
        </div>
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="px-4 py-2 hover:bg-orange-50 cursor-pointer flex items-center"
                onClick={() => addIngredient(suggestion)}
              >
                <Plus size={16} className="text-gray-400 mr-2" />
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {selectedIngredients.map((ingredient) => (
            <div
              key={ingredient}
              className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full"
            >
              <span className="mr-1">{ingredient}</span>
              <button
                onClick={() => removeIngredient(ingredient)}
                className="text-orange-800 hover:text-orange-600 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          ))}
          
          {selectedIngredients.length === 0 && (
            <p className="text-gray-500 text-sm">No ingredients selected. Add some to find matching recipes!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientSelector;