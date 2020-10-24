const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique : true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique : true,
    },
    birthDate: {
        type: Date,
    },
    gender: {
        type: String,
        maxLength:1
    },
    tags: [String]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)