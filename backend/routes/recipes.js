const express = require('express');

const RecipeController = require('../controllers/recipeController.js');

const router = express.Router();

//recipe api resource
router.get('', RecipeController.index);
router.get('/:id', RecipeController.show);
router.post('', RecipeController.store);
router.delete('/:id', RecipeController.destroy);
router.patch('/:id', RecipeController.update);
router.put('/:id', RecipeController.update);

module.exports = router;