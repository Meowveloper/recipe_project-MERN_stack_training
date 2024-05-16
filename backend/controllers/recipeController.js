const Recipe = require("../models/Recipe");

const RecipeController = {
    index: (req, res) => {
        return res.json({
            msg: "Get all recipes",
        });
    },

    store: async (req, res) => {
        try {
            const recipe = await Recipe.create(req.body);
            return res.json({
                data: recipe,
                status : "success", 
                message : "Stored a recipe successfully"
            });
        } catch (err) {
            return res.status(400).json({
                status : "failed", 
                message : "Something went wrong"
            });
        }
    },

    show: (req, res) => {
        return res.json({
            msg: "Get single recipe",
        });
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
