const express = require('express');
const { resolveContent } = require('nodemailer/lib/shared');
const app = express.Router();

//Manager
const AddressManager = require('../Managers/AddressManager')

//Middleware
const verifyToken = require('../Middleware/verifyToken')

app.get('/getAllAddress', verifyToken, (req, res) => {
    AddressManager.getAllAdress().then(response => {
        res.send(response)
    })
})

app.get('/getAdressById', verifyToken, (req, res) => {
    var userId = req.query.userId
    AddressManager.getAdressById(userId).then(response => {
        res.send(response)
    })
})
app.post('/addAddress', verifyToken, (req, res) => {
    var address = req.body
    AddressManager.addAddress(address).then(response => {
        res.send(response)
    })
})

module.exports = app