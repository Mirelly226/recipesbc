const express= require("express");
const app= express();
const bodyParse= require("body-parser");
const mongoose= require("mongoose");
const http = require("http");
const categoryRouter= require("./routers/categoryRouter");
const recipeRouter= require("./routers/recipeRouter");
const { Socket } = require("dgram");

mongoose.connect("mongodb+srv://admin:12345@recipes.crkqq.azure.mongodb.net/recipes?retryWrites=true&w=majority");
mongoose.Promise= global.Promise;
app.use(bodyParse.json());
app.use(categoryRouter);
app.use(recipeRouter);
var server = http.Server(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Listening on ${PORT}")
});
const io = require('socket.io') (server);
io.on('connection', (socket)=>{
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});