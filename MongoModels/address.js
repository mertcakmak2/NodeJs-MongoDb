const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    province: {                  // il
        type: String,
        required: true
    },
    district: {                  //ilçe
        type: String,
        required: true
    },
    neighborhood: {              //mahalle
        type: String,
        required: true
    },
    addressDescription: {        //adres açiklamasi
        type: String,
        required: true
    },
    addressTitle: {              //adres başlığı (ev adresi, iş adresi ...)
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Address', addressSchema)