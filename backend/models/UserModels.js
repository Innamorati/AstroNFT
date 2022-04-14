const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: [{ type: String, require: true }],
    from: { type: Array },
    uniqueString: { type: String },
    admin: { type: Boolean, require: true },
    verifiedMail: { type: String, require: true },
    image: { type: String, },
    basket: [{
        nftId: { type: mongoose.Types.ObjectId, ref: "product" },
    }]
})

const user = mongoose.model('user', UserSchema)

module.exports = user;