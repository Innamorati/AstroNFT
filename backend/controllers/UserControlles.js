const usuario = require('../models/UserModels')

const UserControllers = {

    userRegistration: async (req, res) => {
        const { firstName, lastName, email, password, from, image } = req.body.data

        try {
            const userExist = await usuario.findOne({ email })
            if (userExist) {
                res.json({ succes: false, message: "User exist" })
            }
            else {
                const newUSer = new usuario({
                    firstName,
                    lastName,
                    email,
                    password,
                    from,
                    image,
                    verifiedMail: false,
                })
                await newUSer.save()
                res.json({
                    success: true,
                    from: "registro",
                    message: "Success true"
                })
            }

        }
        catch (err) {
            console.log(err)
            res.json({ succes: false, message: "Succes false" })
        }
    }

}


module.exports = UserControllers