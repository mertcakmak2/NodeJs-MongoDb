const express = require('express')
const app = express.Router()

//Operators
//eq (equal)
//ne
//gt (greater than)
//gte 
//lt (less than)
//lte
//in
//nin


//Main Model
const Product = require('../MongoModels/product')


//Get Products
app.get('/getProducts', (req, res) => {
    Product.find()
        .populate('categoryId')
        // .select('name price userId')
        // .select({ name: 1, price: 1 })
        .then(result => {
            res.send(result)
        })
})

//Get Product By Id
app.get('/getProductById/:id', (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(result => {
            res.send(result)
        })
})

//Get Product By Includes String
app.get('/search', (req, res) => {
    var searchQuery = req.query.src
    Product.find({ "name": { $regex: ".*" + searchQuery + ".*" } })
        .then(result => {
            res.send(result)
        })
})

//Create Product
app.post('/add', (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        date: req.body.date,
        categoryId: req.body.categoryId
    })
    product.save().then(result => {
        res.send(result)
    })
})

//Delete Product
app.get('/delete/:id', (req,res) => {
    Product.deleteOne({_id: req.params.id}).then(result=> {
        res.send(result)
    })
})

//Update Product
app.post('/update', (req, res) => {
    Product.update(
        {_id: req.body.id}, 
        {$set: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,

        }}
    ).then(result=> {
        res.send(result)
    })
})

module.exports = app