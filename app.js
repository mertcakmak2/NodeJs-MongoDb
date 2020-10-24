const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const mongooese = require('mongoose')

app.use(bodyparser.json({ limit: '50mb' }))
app.use(cors())

const config = require('./config')
app.set('api_secret_key', config.api_secret_key)

const PORT = process.env.PORT || 5000;

//Routes
const product = require('./Controller/ProductController')
const user = require('./Controller/UserController')
const category = require('./Controller/CategoryController')
const address = require('./Controller/AddressController');

app.use('/product', product)
app.use('/user', user)
app.use('/category', category)
app.use('/address', address)

mongooese.connect('mongodb+srv://mertcakmak:8NIpweksnlXJJZo9@cluster0.925ew.mongodb.net/node-app?retryWrites=true&w=majority')
    .then(result => {
        console.log("Connector to Mongo")
        app.listen(PORT, () => {
            console.log('Serve is running')
        })
    }).catch(err => {
        console.log(err)
    })