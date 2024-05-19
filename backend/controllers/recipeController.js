const Recipe = require("../models/Recipe");


const RecipeController = {
    index: async (req, res) => {
        const recipes = await Recipe.find().sort({ createdAt: -1 });
        return res.json({
            data: recipes,
        });
    },

    store: async (req, res) => {
        // the attributes must be 'title', description, ingredients
        //const { title, description, ingredients } = req.body;
        const recipe = await Recipe.create(req.body);
        return res.json({
            data: recipe,
            status: "success",
            message: "Stored a recipe successfully",
        });
    },

    show: async (req, res) => {
        try {
            const id = req.params.id;
            let recipe = await Recipe.findById(id);
            return res.json({
                data: recipe,
            });
        } catch (err) {
            return res.status(400).json({ message: "recipe not found.." });
        }
    },

    destroy: (req, res) => {
        return res.json({
            msg: "Delete single recipe",
        });
    },

    update: (req, res) => {
        return res.json({
            msg: "Update single recipe",
        });
    },
};

module.exports = RecipeController;
