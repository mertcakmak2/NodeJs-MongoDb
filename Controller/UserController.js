const express = require('express')
const app = express.Router()

//Main Model
const User = require('../MongoModels/user')

app.get('/getUsers', (req, res) => {
    User.find()
    .then(result => {
        res.send(result)
    })
})

app.post('/add', (req, res) => {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        tags : req.body.tags

    })
    user.save().then(result => {
        res.send(result)
    })
})

app.post('/addTag', (req,res) => {
    User.updateOne(
            {_id: req.body._id}, 
            { $push: {tags: req.body.tag} })
        .then(result => {
        res.send(result)
    })
})

module.exports = app