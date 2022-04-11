const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: [{ type: String, require: true }],
    from: { type: Array },
    uniqueString: { type: String },
    verifiedMail: { type: String, require: true },
    image: { type: String, },
    /* google: {type: Boolean, required: true} */ //agregado para poner en true la verificacion con google sin verificar email
})

const user = mongoose.model('user', UserSchema)

module.exports = user;