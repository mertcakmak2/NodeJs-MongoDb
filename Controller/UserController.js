const express = require('express')
const app = express.Router()

//Model Manager
const UserManager = require("../Managers/UserManager")

//Middleware
const verifyToken = require("../Middleware/verifyToken")

app.get('/getAllUser', verifyToken, (req, res) => {
    UserManager.getAllUser().then(users => {
        console.log(req.decode) //Token payloadını görüntüler
        res.send(users)
    })
})

app.post('/register', (req, res) => {
    var user = req.body
    UserManager.register(user).then(user => {
        res.send(user)
    })
})

app.post('/login', (req, res) => {
    var user = req.body
    var key = req.app.get('api_secret_key')
    UserManager.login(user, key).then(response => {
        res.send(response)
    })
})

// app.post('/addTag', (req, res) => {
//     User.updateOne(
//         { _id: req.body._id },
//         { $push: { tags: req.body.tag } })
//         .then(result => {
//             res.send(result)
//         })
// })

module.exports = app