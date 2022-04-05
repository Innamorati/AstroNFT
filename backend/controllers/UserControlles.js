const usuario = require('../models/UserModels')

const UserControllers = {

    // userRegistration: (req, res) => {
    //     const { firstName, lastName, email, password, from, image } = req.body
    //     new usuario({ firstName, lastName, email, password, from, image }).save()
    //         .then((respuesta) => res.json({ respuesta }))
    //     try {
    //         res.json({
    //             success: true,
    //             from: "registro",
    //             message: "Success true"
    //         })
    //     }
    //     catch (err) {
    //         console.log(err)
    //         res.json({ succes: false, message: "Succes false" })
    //     }
    // }
    userRegistration: (req, res) => {
        const { firstName, lastName, email, password, from, image } = req.body
        new usuario({ firstName, lastName, email, password, from, image }).save()
            .then((respuesta) => res.json({ respuesta }))

        // res.json({respuesta: productos})
    },

}


module.exports = UserControllers