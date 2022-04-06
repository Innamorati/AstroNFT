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
                    res.json({ success: false, from: "signup", message: "You have already made a sign Up in this way make a Sing In" })
                }
                else {
                    const passwordHash = bcryptjs.hashSync(password, 15)

                    existingUser.from.push(from)
                    existingUser.password.push(passwordHash)

                    if (from === "signup") {
                        existingUser.uniqueString = crypto.randomBytes(15).toString('hex')
                        await existingUser.save()
                        res.json({ success: true, from: "signup", message: "Please verify your mail and then log In " })
                    }
                    else {
                        existingUser.save()
                        res.json({ success: true, from: "signup", message: "We add" + "to your means to perform sign In " })
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
                    res.json({ success: true, from: "Signup", message: "Congratulations, your user has been created with" + from })
                }
                else {
                    await newuser.save()
                    res.json({ success: true, from: "signup", message: "Please verify your mail and then log In" })
                }
            }

        }
        catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong try in a few minutes" })
        }

    }
}
module.exports = UserControllers