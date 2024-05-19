const express = require('express');

const RecipeController = require('../controllers/recipeController.js');
const { body } = require('express-validator');
const handleErrorMessage = require('../middlewares/handleErrorMessage.js');
const router = express.Router();

const recipeRequestRules = [

    body('title').notEmpty(), 
    body('description').notEmpty(), 
    body('ingredients').notEmpty().isArray({ min : 3 })
    
];

//recipe api resource
router.get('', RecipeController.index);

router.get('/:id', RecipeController.show);

router.post('', recipeRequestRules , handleErrorMessage , RecipeController.store);

router.delete('/:id', RecipeController.destroy);

router.patch('/:id', RecipeController.update);

router.put('/:id', RecipeController.update);


module.exports = router;