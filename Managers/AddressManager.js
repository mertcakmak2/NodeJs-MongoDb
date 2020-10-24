//Model
const Address = require('../MongoModels/address')
const user = require('../MongoModels/user')

module.exports = {
    getAllAdress() {
        return new Promise((resolve, reject) => {
            Address.find().then(addresses => {
                resolve(addresses)
            }).catch(err => {
                resolve(err)
            })
        })
    },
    getAdressById(userId) {
        return new Promise((resolve, reject) => {
            Address.find({ _id: userId }).then(addresses => {
                resolve(addresses)
            }).catch(err => {
                resolve(err)
            })
        })
    },
    addAddress(address) {
        var { userId, firstName, lastName, phoneNumber, province, district, neighborhood, addressDescription, addressTitle } = address
        return new Promise((resolve, reject) => {
            var address = new Address({ userId, firstName, lastName, phoneNumber, province, district, neighborhood, addressDescription, addressTitle })
            address.save().then(addresses => {
                resolve(addresses)
            }).catch(err => {
                resolve(err)
            })
        })
    }

}