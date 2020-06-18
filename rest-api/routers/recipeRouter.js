const express= require("express");
const router= express.Router();
const Recipe= require('../documents/recipe');
const uri="/api/v1/recipe";

router.post(uri, function(req, res){
    let recipe= req.body;
    if(recipe.name == undefined) res.status(403).send('"The name is required"');
    if(recipe.category == undefined) res.status(403).send('"The category is required"');
    if(recipe.description == undefined) res.status(403).send('"The description is required"');
    Recipe.create(recipe).then(function(){
        res.status(202).send('"Recipe created"')
    }).catch(error=>{
        res.status(403).send('"Information send is invalid"')
    });
})

router.get(uri, function(req, res){
    Recipe.find().then(function(recipes){
        res.send(recipes);
    });
})

router.get(uri+"/:id", function(req, res){
    let id= req.params.id;
    Recipe.findById(id).then(function(recipe){
        res.send(recipe)
    }).catch(error=>{
        res.status(403).send('"Recipe do not find"')        
    })
})

router.get(uri+"/category/:id", function(req, res){
    let id= req.params.id;
    Recipe.find({category:id}).then(function(recipes){
        res.send(recipes)
    }).catch(error=>{
        res.status(403).send('"Recipe do not find"')        
    })
})

router.delete(uri+"/:id", function(req, res){
    let id= req.params.id;
    Recipe.findByIdAndDelete(id).then(function(){
        res.status(201).send('"Recipe deleted"');
    }).catch(error=>{
        res.status(403).send('"Recipe do not find"');        
    })
})

router.put(uri+"/:id", function(req, res){
    let id= req.params.id;
    let recipe=req.body;
    Recipe.findByIdAndUpdate(id, recipe).then(function(){
        res.status(201).send('"Recipe updated"');
    }).catch(error=>{
        res.status(403).send('"Recipe do not find"');        
    })
})

module.exports=router;