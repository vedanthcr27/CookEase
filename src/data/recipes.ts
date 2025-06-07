import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Butter Chicken",
    description: "A rich and creamy curry dish featuring tender chicken pieces in a spiced tomato, butter, and cream sauce.",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image: "https://i.pinimg.com/736x/cd/1f/c3/cd1fc304a511b2d254804cfa8972e12a.jpg",
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
    image: "https://i.pinimg.com/736x/6e/10/c7/6e10c7c0c11d6e2a28d6c51c3877774a.jpg",
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
    image: "https://i.pinimg.com/736x/2f/31/8b/2f318ba1dbf90ea0ede842adcf06ebf7.jpg",
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
    image: "https://images.pexels.com/photos/2474660/pexels-photo-2474660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    title: "Classic Spaghetti Bolognese",
    description: "A rich and hearty Italian sauce with ground beef, tomatoes, and aromatic herbs served over al dente pasta.",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 45,
    servings: 4,
    categories: ["Dinner", "Italian", "Pasta"],
    ingredients: [
      "1 lb ground beef",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 carrot, finely diced",
      "1 celery stalk, finely diced",
      "1 can (14 oz) crushed tomatoes",
      "2 tbsp tomato paste",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "1/2 cup red wine (optional)",
      "1 lb spaghetti",
      "Salt and pepper to taste",
      "Parmesan cheese for serving"
    ],
    instructions: [
      "Heat oil in a large pan over medium heat. Add onion, carrot, and celery and sauté until softened, about 5 minutes.",
      "Add garlic and cook for another minute until fragrant.",
      "Increase heat to medium-high and add ground beef. Cook, breaking it up with a spoon, until browned.",
      "Pour in red wine if using and cook until mostly evaporated.",
      "Add crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Stir well.",
      "Reduce heat to low and simmer for at least 30 minutes, stirring occasionally.",
      "Meanwhile, cook spaghetti according to package instructions until al dente.",
      "Drain pasta and serve topped with the Bolognese sauce and grated Parmesan cheese."
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "65g",
      fat: "15g"
    }
  },
  {
    id: "7",
    title: "Avocado Toast with Poached Egg",
    description: "A nutritious breakfast featuring creamy avocado, perfectly poached eggs, and a hint of spice on toasted bread.",
    image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 15,
    servings: 2,
    categories: ["Breakfast", "Vegetarian", "Quick Meals"],
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 tbsp white vinegar",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "1 tbsp fresh lemon juice",
      "Fresh herbs like cilantro or chives for garnish"
    ],
    instructions: [
      "Toast the bread slices until golden and crisp.",
      "While bread is toasting, bring a pot of water to a gentle simmer. Add vinegar.",
      "Crack each egg into a small bowl and gently slide into the simmering water. Cook for 3-4 minutes for a runny yolk.",
      "Remove eggs with a slotted spoon and place on a paper towel to drain.",
      "Cut avocado in half, remove pit, and scoop flesh into a bowl. Add lemon juice, salt, and pepper, and mash with a fork.",
      "Spread mashed avocado on toast slices.",
      "Top each toast with a poached egg, sprinkle with salt, pepper, and red pepper flakes if desired.",
      "Garnish with fresh herbs and serve immediately."
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "12g",
      carbs: "28g",
      fat: "18g"
    }
  },
  {
    id: "8",
    title: "Vegetable Stir-Fry with Tofu",
    description: "A colorful and vibrant stir-fry loaded with fresh vegetables and tofu, coated in a savory Asian-inspired sauce.",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 25,
    servings: 4,
    categories: ["Dinner", "Vegetarian", "Vegan", "Asian"],
    ingredients: [
      "1 block (14 oz) firm tofu, pressed and cubed",
      "1 tbsp cornstarch",
      "3 tbsp vegetable oil",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "1 cup snow peas",
      "3 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sesame oil",
      "1 tbsp honey or maple syrup",
      "2 green onions, sliced",
      "Sesame seeds for garnish",
      "Cooked rice for serving"
    ],
    instructions: [
      "Pat tofu dry with paper towels and cut into 1-inch cubes. Toss with cornstarch to coat.",
      "Heat 2 tbsp oil in a large wok or pan over medium-high heat. Add tofu and cook until golden on all sides, about 5-7 minutes. Remove and set aside.",
      "Add remaining oil to the pan. Add garlic and ginger and stir-fry for 30 seconds until fragrant.",
      "Add vegetables, starting with the ones that take longer to cook (broccoli and carrots), then add bell peppers and snow peas. Stir-fry for 5-7 minutes until vegetables are crisp-tender.",
      "In a small bowl, whisk together soy sauce, rice vinegar, sesame oil, and honey/maple syrup.",
      "Return tofu to the pan, add the sauce, and toss to coat everything evenly. Cook for another 2 minutes.",
      "Sprinkle with green onions and sesame seeds.",
      "Serve hot over cooked rice."
    ],
    nutrition: {
      calories: "285 kcal",
      protein: "14g",
      carbs: "25g",
      fat: "15g"
    }
  },
  {
    id: "9",
    title: "Berry Smoothie Bowl",
    description: "A refreshing and nutritious smoothie bowl packed with antioxidant-rich berries and topped with granola and fresh fruit.",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 10,
    servings: 1,
    categories: ["Breakfast", "Vegetarian", "Vegan", "Dessert"],
    ingredients: [
      "1 cup mixed frozen berries (strawberries, blueberries, raspberries)",
      "1 frozen banana",
      "1/4 cup Greek yogurt or plant-based alternative",
      "1/4 cup milk or plant-based milk",
      "1 tbsp honey or maple syrup (optional)",
      "Toppings: fresh berries, sliced banana, granola, chia seeds, coconut flakes"
    ],
    instructions: [
      "Place frozen berries, frozen banana, yogurt, milk, and sweetener (if using) in a blender.",
      "Blend until smooth, stopping to scrape down the sides as needed. Add more liquid if it's too thick.",
      "Pour the smoothie into a bowl.",
      "Arrange toppings artfully on top of the smoothie base.",
      "Serve immediately while cold."
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "8g",
      carbs: "65g",
      fat: "5g"
    }
  },
  {
    id: "10",
    title: "Chicken Fajitas",
    description: "Sizzling hot chicken fajitas with colorful bell peppers and onions, served with warm tortillas and your favorite toppings.",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 30,
    servings: 4,
    categories: ["Dinner", "Mexican", "Quick Meals"],
    ingredients: [
      "1.5 lbs chicken breast, sliced into strips",
      "1 red bell pepper, sliced",
      "1 green bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 large onion, sliced",
      "3 cloves garlic, minced",
      "2 tbsp vegetable oil",
      "2 tsp chili powder",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp oregano",
      "1/4 tsp cayenne pepper (optional)",
      "Salt and pepper to taste",
      "2 tbsp lime juice",
      "8 small flour tortillas",
      "Toppings: sour cream, guacamole, salsa, shredded cheese, fresh cilantro"
    ],
    instructions: [
      "In a small bowl, mix together chili powder, cumin, paprika, oregano, cayenne (if using), salt, and pepper.",
      "Place chicken strips in a large bowl and sprinkle with half the spice mixture. Toss to coat evenly.",
      "Heat 1 tablespoon oil in a large skillet over medium-high heat. Add chicken and cook until no longer pink, about 5-7 minutes. Remove from pan and set aside.",
      "Add remaining oil to the skillet. Add onions and bell peppers and sprinkle with remaining spice mixture. Cook until vegetables are slightly softened but still crisp, about 5 minutes.",
      "Add garlic and cook for another minute.",
      "Return chicken to the pan, add lime juice, and toss everything together. Cook for another 2 minutes.",
      "Warm tortillas according to package instructions.",
      "Serve fajita mixture with warm tortillas and desired toppings."
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "35g",
      carbs: "38g",
      fat: "14g"
    }
  },
  {
    id: "11",
    title: "Chocolate Chip Cookies",
    description: "Classic chocolate chip cookies with a perfect balance of chewy centers and crispy edges, loaded with chocolate chips.",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 25,
    servings: 24,
    categories: ["Dessert", "Snack", "Baking"],
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups semisweet chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      "In a small bowl, whisk together flour, baking soda, and salt.",
      "In a large bowl, beat butter, granulated sugar, and brown sugar until creamy, about 2-3 minutes.",
      "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
      "Gradually add flour mixture to butter mixture, mixing until just combined.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto prepared baking sheets, spacing cookies about 2 inches apart.",
      "Bake for 9-11 minutes or until golden around the edges but still soft in the center.",
      "Cool on baking sheets for 2 minutes, then transfer to wire racks to cool completely."
    ],
    nutrition: {
      calories: "180 kcal",
      protein: "2g",
      carbs: "24g",
      fat: "10g"
    }
  },
  {
    id: "12",
    title: "Quinoa Salad with Roasted Vegetables",
    description: "A nutritious and colorful quinoa salad with a medley of roasted vegetables, fresh herbs, and a zesty lemon dressing.",
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cookTime: 40,
    servings: 4,
    categories: ["Lunch", "Vegetarian", "Vegan", "Salad"],
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "1 zucchini, diced",
      "1 red bell pepper, diced",
      "1 yellow bell pepper, diced",
      "1 red onion, diced",
      "2 cups cherry tomatoes, halved",
      "3 tbsp olive oil, divided",
      "1 tsp dried oregano",
      "1/2 cup kalamata olives, pitted and halved",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh mint, chopped",
      "2 tbsp lemon juice",
      "1 tsp lemon zest",
      "1 clove garlic, minced",
      "Salt and pepper to taste",
      "1/4 cup crumbled feta cheese (omit for vegan option)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.",
      "In a medium saucepan, bring quinoa and vegetable broth to a boil. Reduce heat, cover, and simmer for 15 minutes or until liquid is absorbed. Remove from heat and let stand, covered, for 5 minutes, then fluff with a fork.",
      "Toss zucchini, bell peppers, red onion, and cherry tomatoes with 2 tablespoons olive oil, oregano, salt, and pepper. Spread on the prepared baking sheet.",
      "Roast vegetables for 20-25 minutes, stirring halfway through, until tender and lightly caramelized.",
      "In a small bowl, whisk together remaining olive oil, lemon juice, lemon zest, garlic, salt, and pepper to make the dressing.",
      "In a large bowl, combine quinoa, roasted vegetables, olives, parsley, and mint.",
      "Pour dressing over the salad and toss gently to combine.",
      "Sprinkle with feta cheese if using and serve warm or at room temperature."
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "9g",
      carbs: "42g",
      fat: "14g"
    }
  },
  {
    id: "13",
    title: "Mushroom Risotto",
    description: "A creamy and indulgent Italian risotto with sautéed mushrooms, white wine, and Parmesan cheese.",
    image: "https://i.pinimg.com/736x/af/31/f9/af31f9aacd3134968b3656545ae36170.jpg",
    cookTime: 35,
    servings: 4,
    categories: ["Dinner", "Italian", "Vegetarian"],
    ingredients: [
      "6 cups vegetable or chicken broth",
      "3 tbsp butter, divided",
      "1 tbsp olive oil",
      "1 medium onion, finely chopped",
      "3 cloves garlic, minced",
      "1 lb mixed mushrooms (button, cremini, shiitake), sliced",
      "1 1/2 cups Arborio rice",
      "1/2 cup dry white wine",
      "1/2 cup freshly grated Parmesan cheese, plus more for serving",
      "2 tbsp fresh thyme leaves",
      "Salt and pepper to taste",
      "2 tbsp fresh parsley, chopped"
    ],
    instructions: [
      "In a medium saucepan, bring broth to a simmer. Keep warm over low heat.",
      "In a large, wide saucepan, heat 1 tablespoon butter and olive oil over medium heat. Add onion and cook until soft and translucent, about 5 minutes.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Add mushrooms and cook until they release their moisture and begin to brown, about 8 minutes.",
      "Add rice and stir for 1-2 minutes until grains are translucent around the edges.",
      "Pour in wine and stir until absorbed.",
      "Add 1 cup of warm broth and stir frequently until almost all liquid is absorbed.",
      "Continue adding broth, 1/2 cup at a time, stirring until each addition is absorbed before adding more. This will take about 20-25 minutes.",
      "When rice is tender but still firm to the bite, remove from heat. Stir in remaining butter, Parmesan cheese, and thyme.",
      "Season with salt and pepper to taste. Let stand for 2 minutes.",
      "Garnish with parsley and additional Parmesan cheese before serving."
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "12g",
      carbs: "56g",
      fat: "15g"
    }
  }
];