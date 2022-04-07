const usuario = require('../models/UserModels')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')

const UserControllers = {

    userRegistration: async (req, res) => {
        let { firstName, lastName, email, password, from, image } = req.body.data
        try {
            const existingUser = await usuario.findOne({ email })
            if (existingUser) {
                if (existingUser.from.indexOf(from) !== -1) {
                    res.json({ success: false, from: "signup", message: "You have already signed up in this way. Please, sign in" })
                }
                else {
                    const passwordHash = bcryptjs.hashSync(password, 15)

                    existingUser.from.push(from)
                    existingUser.password.push(passwordHash)

                    if (from === "signup") {
                        existingUser.uniqueString = crypto.randomBytes(15).toString('hex')
                        await existingUser.save()
                        res.json({ success: true, from: "signup", message: "Please, verify your email and then log in " })
                    }
                    else {
                        existingUser.save()
                        res.json({ success: true, from: "signup", message: "We add" + "to your sign in methods" })
                    }
                }
            }
            else {
                const passwordHash = bcryptjs.hashSync(password, 15)

                const newuser = await new usuario({
                    firstName,
                    lastName,
                    email,
                    password: [passwordHash],
                    uniqueString: crypto.randomBytes(15).toString('hex'),
                    verifiedMail: false,
                    from: [from],
                    image,
                })
                if (from !== "signup") {
                    await newuser.save()
                    res.json({ success: true, from: "Signup", message: "Congratulations, your account has been created with" + from })
                }
                else {
                    await newuser.save()
                    res.json({ success: true, from: "signup", message: "Please, verify your email and then log in" })
                }
            }

        }
        catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong. Try again in a few minutes" })
        }

    }
}
module.exports = UserControllers