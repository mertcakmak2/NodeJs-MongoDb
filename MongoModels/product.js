const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)