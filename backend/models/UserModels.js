const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: [{ type: String, require: true }],
    from: { type: Array },
    uniqueString: { type: String },
    verifiedMail: { type: String, required: true }
})