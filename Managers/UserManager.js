
//Model
const User = require('../MongoModels/user')

//Modules
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function getAllUser() {
    return new Promise((resolve, reject) => {
        User.find().then(result => {
            resolve(result)
        })
    })
}

function register(user) {
    return new Promise((resolve, reject) => {
        var { name, email, password, tags } = user
        bcrypt.hash(password, 10).then(hash => {
            password = hash
            var user = new User({ name, email, password, tags })
            user.save().then(result => {
                resolve(result)
            })
        })
    })
}

function login(user, key) {
    return new Promise((resolve, reject) => {
        var { email, password } = user
        User.find({ email: email }).then(result => {
            if (result.length) {
                const user = result[0]
                bcrypt.compare(password, user.password).then(status => {
                    if (!status) {
                        resolve({
                            status,
                            message: "Authentication failed, wrong password"
                        })
                    } else {
                        const payload = {
                            email
                        };
                        const token = jwt.sign(payload, key, {
                            expiresIn: 120 //120 saniyelik token (2 dakika)
                        })
                        resolve({
                            status,
                            token,
                            message: "Authentication success"
                        })
                    }
                })
            } else resolve({
                status: false,
                message: 'Authentication failed, user not found.'
            })
        })
    })
}

module.exports = {
    getAllUser,
    register,
    login
}