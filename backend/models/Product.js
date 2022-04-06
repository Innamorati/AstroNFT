const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: { type: String, require: true },
    creator: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    description: { type: String },
    details: {
        owner: { type: String, required: true },
        red: { type: String, required: true },
        contractAddress: { type: String, required: true },
        tokenId: { type: String }
    }
})

const product = mongoose.model('product', ProductSchema)

module.exports = product;