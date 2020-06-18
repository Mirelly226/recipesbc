const express=require("express");
const router= express.Router();
const Category= require('../documents/category');
const uri="/api/v1/category";

router.post(uri, function(req, res){
    let category= req.body;
    if(category.name == undefined) res.status(403).send('"The name is required"');
    Category.create(category).then(function(){
        res.status(202).send('"Category created"')
    }).catch(error=>{
        res.status(403).send('"Information send is invalid"')
    });
})

router.get(uri, function(req, res){
    Category.find().then(function(categories){
        res.send(categories);
    });
})

router.get(uri+"/:id", function(req, res){
    let id= req.params.id;
    Category.findById(id).then(function(category){
        res.send(category)
    }).catch(error=>{
        res.status(403).send('"Category do not find"')        
    })
})

router.delete(uri+"/:id", function(req, res){
    let id= req.params.id;
    Category.findByIdAndDelete(id).then(function(){
        res.status(201).send('"category deleted"');
    }).catch(error=>{
        res.status(403).send('"category do not find"');        
    })
})

router.put(uri+"/:id", function(req, res){
    let id= req.params.id;
    let category=req.body;
    Category.findByIdAndUpdate(id, category).then(function(){
        res.status(201).send('"category updated"');
    }).catch(error=>{
        res.status(403).send('"category do not find"');        
    })
})

module.exports=router;