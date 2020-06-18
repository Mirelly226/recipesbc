const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: String,
});
const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;
