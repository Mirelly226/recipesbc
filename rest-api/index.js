const express= require("express");
const app= express();
const bodyParse= require("body-parser");
const mongoose= require("mongoose");
const categoryRouter= require("./routers/categoryRouter");
const recipeRouter= require("./routers/recipeRouter");
mongoose.connect("mongodb+srv://admin:12345@recipes.crkqq.azure.mongodb.net/recipes?retryWrites=true&w=majority");
mongoose.Promise= global.Promise;

app.use(bodyParse.json());
app.use(categoryRouter);
app.use(recipeRouter);

app.listen(process.env.port || 4000, function(){
    console.log("ready to listen port 4000");
});