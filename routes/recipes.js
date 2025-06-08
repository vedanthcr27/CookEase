const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = [
      {
        id: "1",
        title: "Butter Chicken",
        description: "A rich and creamy curry dish featuring tender chicken pieces in a spiced tomato, butter, and cream sauce.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60",
        cookTime: 45,
        servings: 4,
        categories: ["Dinner", "Indian", "Non-vegetarian"],
        ingredients: [
          "1 lb chicken thighs, cut into pieces",
          "1 cup yogurt",
          "2 tbsp ginger-garlic paste",
          "1 tsp turmeric powder",
          "1 tsp red chili powder",
          "2 tbsp butter",
          "1 onion, finely chopped",
          "2 tomatoes, pureed",
          "1 cup heavy cream",
          "1 tsp garam masala",
          "1 tsp kasuri methi (dried fenugreek leaves)",
          "Salt to taste",
          "Fresh coriander for garnish"
        ],
        instructions: [
          "Marinate chicken with yogurt, ginger-garlic paste, turmeric, and red chili powder for 30 minutes.",
          "Heat butter in a pan and cook marinated chicken until golden brown.",
          "In another pan, sauté onions until translucent.",
          "Add tomato puree and cook until oil separates.",
          "Add cooked chicken, cream, garam masala, and kasuri methi.",
          "Simmer for 10-15 minutes until the sauce thickens.",
          "Garnish with fresh coriander and serve hot with naan or rice."
        ],
        nutrition: {
          calories: "450 kcal",
          protein: "28g",
          carbs: "12g",
          fat: "32g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "45 mins",
        dietary: "Non-vegetarian"
      },
      {
        id: "2",
        title: "Vegetable Biryani",
        description: "A fragrant Indian rice dish with mixed vegetables, aromatic spices, and basmati rice.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60",
        cookTime: 45,
        servings: 6,
        categories: ["Dinner", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups basmati rice",
          "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
          "1 onion, sliced",
          "2 tomatoes, chopped",
          "2 tbsp ginger-garlic paste",
          "1 cup yogurt",
          "2 tbsp biryani masala",
          "1 tsp turmeric powder",
          "1 tsp red chili powder",
          "4-5 green cardamoms",
          "2-3 cinnamon sticks",
          "4-5 cloves",
          "1 bay leaf",
          "Fresh mint and coriander leaves",
          "Saffron strands soaked in warm milk",
          "Ghee or oil",
          "Salt to taste"
        ],
        instructions: [
          "Wash and soak rice for 30 minutes.",
          "Parboil rice with whole spices until 70% cooked.",
          "In a pan, sauté onions until golden brown.",
          "Add ginger-garlic paste and cook for 2 minutes.",
          "Add vegetables, biryani masala, turmeric, and red chili powder.",
          "Cook vegetables until tender.",
          "Layer rice and vegetable mixture in a heavy-bottomed pan.",
          "Add saffron milk, mint, and coriander leaves between layers.",
          "Cover and cook on low heat for 20-25 minutes.",
          "Serve hot with raita."
        ],
        nutrition: {
          calories: "380 kcal",
          protein: "8g",
          carbs: "65g",
          fat: "12g"
        },
        cuisine: "Indian",
        difficulty: "Hard",
        time: "60 mins",
        dietary: "Vegetarian"
      },
      {
        id: "3",
        title: "Masala Dosa",
        description: "Crispy fermented rice and lentil crepes filled with spiced potato filling, served with sambar and chutney.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60",
        cookTime: 30,
        servings: 4,
        categories: ["Breakfast", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups rice",
          "1 cup urad dal (black gram)",
          "1/2 tsp fenugreek seeds",
          "Salt to taste",
          "For potato filling:",
          "4 potatoes, boiled and mashed",
          "1 onion, finely chopped",
          "2 green chilies, chopped",
          "1 tsp mustard seeds",
          "1 tsp turmeric powder",
          "Curry leaves",
          "Oil for cooking"
        ],
        instructions: [
          "Soak rice, urad dal, and fenugreek seeds separately for 6-8 hours.",
          "Grind to make a smooth batter and ferment overnight.",
          "For potato filling, heat oil and add mustard seeds.",
          "Add onions, green chilies, and curry leaves.",
          "Add mashed potatoes and spices, cook for 5 minutes.",
          "Heat a griddle and pour batter to make thin dosas.",
          "Cook until crispy, add potato filling, and fold.",
          "Serve hot with sambar and coconut chutney."
        ],
        nutrition: {
          calories: "320 kcal",
          protein: "6g",
          carbs: "58g",
          fat: "8g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "30 mins",
        dietary: "Vegetarian"
      },
      {
        id: "4",
        title: "Chole Bhature",
        description: "Spiced chickpea curry served with fluffy deep-fried bread, a popular North Indian dish.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=60",
        cookTime: 40,
        servings: 4,
        categories: ["Breakfast", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups chickpeas, soaked overnight",
          "2 onions, finely chopped",
          "2 tomatoes, pureed",
          "2 tbsp ginger-garlic paste",
          "2 tsp chole masala",
          "1 tsp garam masala",
          "1 tsp amchur (dry mango powder)",
          "For bhature:",
          "2 cups all-purpose flour",
          "1/2 cup yogurt",
          "1 tsp baking powder",
          "Salt to taste",
          "Oil for deep frying"
        ],
        instructions: [
          "Pressure cook chickpeas until tender.",
          "Heat oil and sauté onions until golden.",
          "Add ginger-garlic paste and cook for 2 minutes.",
          "Add tomato puree and spices, cook until oil separates.",
          "Add cooked chickpeas and simmer for 10 minutes.",
          "For bhature, mix flour, yogurt, baking powder, and salt.",
          "Knead into a soft dough and rest for 2 hours.",
          "Roll into circles and deep fry until puffed and golden.",
          "Serve hot chole with bhature and accompaniments."
        ],
        nutrition: {
          calories: "450 kcal",
          protein: "12g",
          carbs: "65g",
          fat: "18g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "40 mins",
        dietary: "Vegetarian"
      },
      {
        id: "5",
        title: "Paneer Tikka",
        description: "Marinated and grilled cottage cheese cubes with vegetables, served with mint chutney.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=60",
        cookTime: 25,
        servings: 4,
        categories: ["Appetizer", "Indian", "Vegetarian"],
        ingredients: [
          "400g paneer, cut into cubes",
          "1 cup yogurt",
          "2 tbsp ginger-garlic paste",
          "1 tsp red chili powder",
          "1 tsp garam masala",
          "1 tsp chaat masala",
          "1 tsp turmeric powder",
          "2 tbsp mustard oil",
          "Bell peppers and onions, cut into chunks",
          "Salt to taste",
          "Lemon juice",
          "Fresh coriander for garnish"
        ],
        instructions: [
          "Mix yogurt with all spices and ginger-garlic paste.",
          "Add paneer cubes and vegetables to the marinade.",
          "Let it marinate for 30 minutes.",
          "Thread paneer and vegetables onto skewers.",
          "Grill or bake until charred and cooked through.",
          "Sprinkle chaat masala and lemon juice.",
          "Garnish with fresh coriander and serve hot."
        ],
        nutrition: {
          calories: "280 kcal",
          protein: "15g",
          carbs: "8g",
          fat: "22g"
        },
        cuisine: "Indian",
        difficulty: "Easy",
        time: "25 mins",
        dietary: "Vegetarian"
      },
      {
        id: "6",
        title: "Chicken Tikka Masala",
        description: "A flavorful journey into Indian cuisine featuring tender, juicy chicken thighs simmered in a creamy, spiced tomato sauce. Perfect for busy weeknights or special gatherings, it pairs beautifully with fluffy basmati rice or warm naan bread.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60",
        cookTime: 375, // 6 hours 15 minutes
        servings: 6,
        categories: ["Dinner", "Indian", "Non-vegetarian", "Slow Cooker"],
        ingredients: [
          "2 lbs Chicken thighs, boneless skinless",
          "4 Garlic cloves",
          "1 tbsp Ginger, fresh",
          "1 Onion, large",
          "2 cans Tomatoes",
          "1 can Coconut milk",
          "3 tbsp Tikka masala spice blend"
        ],
        instructions: [
          "Place chicken thighs in the slow cooker",
          "Add garlic, ginger, and onion",
          "Pour in tomatoes and coconut milk",
          "Add tikka masala spice blend",
          "Cook on low for 6 hours",
          "Serve hot with rice or naan bread"
        ],
        nutrition: {
          calories: "450 kcal",
          protein: "35g",
          carbs: "15g",
          fat: "28g"
        },
        cuisine: "Indian",
        difficulty: "Easy",
        time: "6hr 15min",
        dietary: "Non-vegetarian"
      },
      {
        id: "7",
        title: "Jalebi",
        description: "Crispy, sweet, and spiral-shaped deep-fried dessert soaked in sugar syrup, a popular Indian sweet.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=60",
        cookTime: 30,
        servings: 4,
        categories: ["Dessert", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups all-purpose flour",
          "1/4 cup yogurt",
          "1/4 tsp baking powder",
          "1/4 tsp turmeric powder (for color)",
          "Oil for deep frying",
          "For sugar syrup:",
          "2 cups sugar",
          "1 cup water",
          "1/4 tsp cardamom powder",
          "Few strands of saffron (optional)",
          "1 tsp lemon juice"
        ],
        instructions: [
          "Mix flour, yogurt, baking powder, and turmeric with water to make a smooth batter.",
          "Let the batter ferment for 8-10 hours.",
          "Prepare sugar syrup by boiling sugar and water until it reaches one-string consistency.",
          "Add cardamom powder, saffron, and lemon juice to the syrup.",
          "Heat oil in a pan.",
          "Pour the batter into a squeeze bottle or piping bag.",
          "Make spiral shapes in hot oil and fry until crispy and golden.",
          "Immediately transfer to warm sugar syrup.",
          "Let it soak for 2-3 minutes.",
          "Serve hot or at room temperature."
        ],
        nutrition: {
          calories: "350 kcal",
          protein: "4g",
          carbs: "65g",
          fat: "12g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "30 mins",
        dietary: "Vegetarian"
      },
      {
        id: "8",
        title: "Upma",
        description: "A savory South Indian breakfast dish made with semolina, vegetables, and aromatic spices.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60",
        cookTime: 20,
        servings: 4,
        categories: ["Breakfast", "Indian", "Vegetarian"],
        ingredients: [
          "1 cup semolina (rava/sooji)",
          "1 onion, finely chopped",
          "1 carrot, finely chopped",
          "1/4 cup green peas",
          "2 green chilies, chopped",
          "1 inch ginger, grated",
          "1/2 tsp mustard seeds",
          "1/2 tsp urad dal",
          "1/2 tsp chana dal",
          "10-12 curry leaves",
          "2 tbsp oil",
          "2 cups water",
          "Salt to taste",
          "Lemon juice (optional)",
          "Fresh coriander for garnish"
        ],
        instructions: [
          "Dry roast semolina in a pan until fragrant and slightly golden. Set aside.",
          "Heat oil in a pan and add mustard seeds.",
          "When they crackle, add urad dal and chana dal.",
          "Add curry leaves, green chilies, and ginger.",
          "Add onions and sauté until translucent.",
          "Add carrots and peas, cook for 2-3 minutes.",
          "Add water and salt, bring to a boil.",
          "Gradually add roasted semolina while stirring continuously.",
          "Cook on low heat until water is absorbed and upma is fluffy.",
          "Garnish with fresh coriander and serve hot."
        ],
        nutrition: {
          calories: "280 kcal",
          protein: "6g",
          carbs: "45g",
          fat: "8g"
        },
        cuisine: "Indian",
        difficulty: "Easy",
        time: "20 mins",
        dietary: "Vegetarian"
      }
    ];
    res.json(recipes);
  } catch (error) {
    console.error('Get recipes error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single recipe
router.get('/:id', async (req, res) => {
  try {
    const recipes = [
      {
        id: "1",
        title: "Butter Chicken",
        description: "A rich and creamy curry dish featuring tender chicken pieces in a spiced tomato, butter, and cream sauce.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60",
        cookTime: 45,
        servings: 4,
        categories: ["Dinner", "Indian", "Non-vegetarian"],
        ingredients: [
          "1 lb chicken thighs, cut into pieces",
          "1 cup yogurt",
          "2 tbsp ginger-garlic paste",
          "1 tsp turmeric powder",
          "1 tsp red chili powder",
          "2 tbsp butter",
          "1 onion, finely chopped",
          "2 tomatoes, pureed",
          "1 cup heavy cream",
          "1 tsp garam masala",
          "1 tsp kasuri methi (dried fenugreek leaves)",
          "Salt to taste",
          "Fresh coriander for garnish"
        ],
        instructions: [
          "Marinate chicken with yogurt, ginger-garlic paste, turmeric, and red chili powder for 30 minutes.",
          "Heat butter in a pan and cook marinated chicken until golden brown.",
          "In another pan, sauté onions until translucent.",
          "Add tomato puree and cook until oil separates.",
          "Add cooked chicken, cream, garam masala, and kasuri methi.",
          "Simmer for 10-15 minutes until the sauce thickens.",
          "Garnish with fresh coriander and serve hot with naan or rice."
        ],
        nutrition: {
          calories: "450 kcal",
          protein: "28g",
          carbs: "12g",
          fat: "32g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "45 mins",
        dietary: "Non-vegetarian"
      },
      {
        id: "2",
        title: "Vegetable Biryani",
        description: "A fragrant Indian rice dish with mixed vegetables, aromatic spices, and basmati rice.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60",
        cookTime: 45,
        servings: 6,
        categories: ["Dinner", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups basmati rice",
          "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
          "1 onion, sliced",
          "2 tomatoes, chopped",
          "2 tbsp ginger-garlic paste",
          "1 cup yogurt",
          "2 tbsp biryani masala",
          "1 tsp turmeric powder",
          "1 tsp red chili powder",
          "4-5 green cardamoms",
          "2-3 cinnamon sticks",
          "4-5 cloves",
          "1 bay leaf",
          "Fresh mint and coriander leaves",
          "Saffron strands soaked in warm milk",
          "Ghee or oil",
          "Salt to taste"
        ],
        instructions: [
          "Wash and soak rice for 30 minutes.",
          "Parboil rice with whole spices until 70% cooked.",
          "In a pan, sauté onions until golden brown.",
          "Add ginger-garlic paste and cook for 2 minutes.",
          "Add vegetables, biryani masala, turmeric, and red chili powder.",
          "Cook vegetables until tender.",
          "Layer rice and vegetable mixture in a heavy-bottomed pan.",
          "Add saffron milk, mint, and coriander leaves between layers.",
          "Cover and cook on low heat for 20-25 minutes.",
          "Serve hot with raita."
        ],
        nutrition: {
          calories: "380 kcal",
          protein: "8g",
          carbs: "65g",
          fat: "12g"
        },
        cuisine: "Indian",
        difficulty: "Hard",
        time: "60 mins",
        dietary: "Vegetarian"
      },
      {
        id: "3",
        title: "Masala Dosa",
        description: "Crispy fermented rice and lentil crepes filled with spiced potato filling, served with sambar and chutney.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60",
        cookTime: 30,
        servings: 4,
        categories: ["Breakfast", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups rice",
          "1 cup urad dal (black gram)",
          "1/2 tsp fenugreek seeds",
          "Salt to taste",
          "For potato filling:",
          "4 potatoes, boiled and mashed",
          "1 onion, finely chopped",
          "2 green chilies, chopped",
          "1 tsp mustard seeds",
          "1 tsp turmeric powder",
          "Curry leaves",
          "Oil for cooking"
        ],
        instructions: [
          "Soak rice, urad dal, and fenugreek seeds separately for 6-8 hours.",
          "Grind to make a smooth batter and ferment overnight.",
          "For potato filling, heat oil and add mustard seeds.",
          "Add onions, green chilies, and curry leaves.",
          "Add mashed potatoes and spices, cook for 5 minutes.",
          "Heat a griddle and pour batter to make thin dosas.",
          "Cook until crispy, add potato filling, and fold.",
          "Serve hot with sambar and coconut chutney."
        ],
        nutrition: {
          calories: "320 kcal",
          protein: "6g",
          carbs: "58g",
          fat: "8g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "30 mins",
        dietary: "Vegetarian"
      },
      {
        id: "4",
        title: "Chole Bhature",
        description: "Spiced chickpea curry served with fluffy deep-fried bread, a popular North Indian dish.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=60",
        cookTime: 40,
        servings: 4,
        categories: ["Breakfast", "Indian", "Vegetarian"],
        ingredients: [
          "2 cups chickpeas, soaked overnight",
          "2 onions, finely chopped",
          "2 tomatoes, pureed",
          "2 tbsp ginger-garlic paste",
          "2 tsp chole masala",
          "1 tsp garam masala",
          "1 tsp amchur (dry mango powder)",
          "For bhature:",
          "2 cups all-purpose flour",
          "1/2 cup yogurt",
          "1 tsp baking powder",
          "Salt to taste",
          "Oil for deep frying"
        ],
        instructions: [
          "Pressure cook chickpeas until tender.",
          "Heat oil and sauté onions until golden.",
          "Add ginger-garlic paste and cook for 2 minutes.",
          "Add tomato puree and spices, cook until oil separates.",
          "Add cooked chickpeas and simmer for 10 minutes.",
          "For bhature, mix flour, yogurt, baking powder, and salt.",
          "Knead into a soft dough and rest for 2 hours.",
          "Roll into circles and deep fry until puffed and golden.",
          "Serve hot chole with bhature and accompaniments."
        ],
        nutrition: {
          calories: "450 kcal",
          protein: "12g",
          carbs: "65g",
          fat: "18g"
        },
        cuisine: "Indian",
        difficulty: "Medium",
        time: "40 mins",
        dietary: "Vegetarian"
      },
      {
        id: "5",
        title: "Paneer Tikka",
        description: "Marinated and grilled cottage cheese cubes with vegetables, served with mint chutney.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=60",
        cookTime: 25,
        servings: 4,
        categories: ["Appetizer", "Indian", "Vegetarian"],
        ingredients: [
          "400g paneer, cut into cubes",
          "1 cup yogurt",
          "2 tbsp ginger-garlic paste",
          "1 tsp red chili powder",
          "1 tsp garam masala",
          "1 tsp chaat masala",
          "1 tsp turmeric powder",
          "2 tbsp mustard oil",
          "Bell peppers and onions, cut into chunks",
          "Salt to taste",
          "Lemon juice",
          "Fresh coriander for garnish"
        ],
        instructions: [
          "Mix yogurt with all spices and ginger-garlic paste.",
          "Add paneer cubes and vegetables to the marinade.",
          "Let it marinate for 30 minutes.",
          "Thread paneer and vegetables onto skewers.",
          "Grill or bake until charred and cooked through.",
          "Sprinkle chaat masala and lemon juice.",
          "Garnish with fresh coriander and serve hot."
        ],
        nutrition: {
          calories: "280 kcal",
          protein: "15g",
          carbs: "8g",
          fat: "22g"
        },
        cuisine: "Indian",
        difficulty: "Easy",
        time: "25 mins",
        dietary: "Vegetarian"
      }
    ];
    const recipe = recipes.find(r => r.id === req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Get recipe error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 