const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get saved recipes
router.get('/saved-recipes', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    // Return the saved recipe IDs since we're using mock data
    res.json(user.savedRecipes);
  } catch (error) {
    console.error('Get saved recipes error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Save recipe
router.post('/save-recipe/:recipeId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const recipeId = req.params.recipeId;
    
    // Check if recipe is already saved
    if (!user.savedRecipes.includes(recipeId)) {
      user.savedRecipes.push(recipeId);
      await user.save();
    }
    res.json({ message: 'Recipe saved successfully' });
  } catch (error) {
    console.error('Save recipe error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Unsave recipe
router.delete('/unsave-recipe/:recipeId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const recipeId = req.params.recipeId;
    
    // Remove the recipe ID from savedRecipes
    user.savedRecipes = user.savedRecipes.filter(id => id !== recipeId);
    await user.save();
    res.json({ message: 'Recipe unsaved successfully' });
  } catch (error) {
    console.error('Unsave recipe error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 