const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: { type: String, require: true },
    creator: { type: String, require: true },
    price: { type: Number, require: true },
    file: { type: String, require: true },
    description: { type: String },
    details: {
        owner: { type: String, required: true },
        red: { type: String, required: true },
        contractAddress: { type: String, required: true },
        category: {type: String, required: true},
        filType: {type: String, required: true}
    }
})



const Product = mongoose.model('product', ProductSchema)

module.exports = Product;