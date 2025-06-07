const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Get all recipes
router.get('/', async (req, res) => {
  try {
    // For now, we'll return mock data
    // Later we'll connect this to MongoDB
    const recipes = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
        instructions: "1. Cook pasta\n2. Mix eggs and cheese\n3. Combine and serve",
        image: "https://source.unsplash.com/random/800x600/?pasta"
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
    // For now, return mock data
    const recipe = {
      id: req.params.id,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish",
      ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
      instructions: "1. Cook pasta\n2. Mix eggs and cheese\n3. Combine and serve",
      image: "https://source.unsplash.com/random/800x600/?pasta"
    };
    res.json(recipe);
  } catch (error) {
    console.error('Get recipe error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 