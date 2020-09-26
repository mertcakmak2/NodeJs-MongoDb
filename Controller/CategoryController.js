const express = require('express')
const app = express.Router()

//Main Model
const Category = require('../MongoModels/category')
const Product = require('../MongoModels/product')

app.get('/getCategory', (req, res) => {
    Category.aggregate([
        { 
            $lookup: { 
                from: Product.collection.name, localField: "_id", foreignField: "categoryId", as:"Products"
            } 
        }
    ]).then(result => {
        res.send(result)
    })
})

app.post('/add', (req, res) => {
    var category = new Category({
        name: req.body.name,
        description: req.body.description,
    })
    category.save().then(result => {
        res.send(result)
    })
})

module.exports = app