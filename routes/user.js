const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get saved recipes
router.get('/saved-recipes', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate('savedRecipes');
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
    if (!user.savedRecipes.includes(req.params.recipeId)) {
      user.savedRecipes.push(req.params.recipeId);
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
    user.savedRecipes = user.savedRecipes.filter(
      recipeId => recipeId.toString() !== req.params.recipeId
    );
    await user.save();
    res.json({ message: 'Recipe unsaved successfully' });
  } catch (error) {
    console.error('Unsave recipe error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 