const dotenv = require('dotenv');

// *Useful for getting environment vairables
dotenv.config();
const usuario = require('../models/UserModels')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2(
    process.env.GOOGLE_CLIENTID,
    process.env.GOOGLE_CLIENTSECRET,
    "https://developers.google.com/oauthplayground"
)
myOAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESHTOKEN
});

const accessToken = myOAuth2Client.getAccessToken()

const sendEmail = async (email, uniqueString) => { //FUNCION ENCARGADA DE ENVIAR EL EMAIL

    const transporter = nodemailer.createTransport({ //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
        service: "gmail",
        auth: {
            user: "astronftverify@gmail.com",    //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
            type: "OAuth2",
            clientId: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENTSECRET,
            refreshToken: process.env.GOOGLE_REFRESHTOKEN,
            accessToken: accessToken                        //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
        },
        tls: {
            rejectUnauthorized: false
        }                                            //CONFIGURACIONES DE GMAIL
    })

    // EN ESTA SECCION LOS PARAMETROS DEL MAIL 
    let sender = "astronftverify@gmail.com"
    let mailOptions = {
        from: sender,    //DE QUIEN
        to: email,       //A QUIEN
        subject: "Verificacion de email usuario ", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
        html: `
        <div >
        <h1 style="color:red">Presiona <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a> para confirma tu email. Gracias </h1>
        </div>
        `

    };

    transporter.sendMail(mailOptions, function (error, response) { //SE REALIZA EL ENVIO
        if (error) { console.log(error) }
    })
};


const UserControllers = {
    verifyEmail: async (req, res) => {

        const { uniqueString } = req.params;

        const user = await usuario.findOne({ uniqueString: uniqueString })
        if (user) {
            user.verifiedMail = true;
            await user.save()
            res.redirect("http://localhost:3000/");
        }
        else { res.json({ success: false, response: "Su email no se ha verificado" }) }
    },

    userRegistration: async (req, res) => {
        let { firstName, lastName, email, password, from, image, google } = req.body.data //agregué propiedad "google"
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
                        await sendEmail(email, existingUser.uniqueString)
                        res.json({ success: true, from: "signup", message: "Please verify your mail and then log In " })
                    }
                    else {
                        existingUser.save()
                        res.json({ success: true, from: "signup", message: "We add" + "to your sign in methods" })
                    }
                }
            }
            else {
                //agregué este condicional, fijense si esta bien y si lo quieren dejar, cambiar o borrar
                // if(google){
                //     const passwordHash = bcryptjs.hashSync(password, 15)
                //     existingUser.password = passwordHash;
                //     existingUser.verifiedMail = true
                //     existingUser.google = true

                //     existingUser.save()
                //     res.json({ success: true, from: "google", message: "Now, you can sign in with google too"})
                // }else{
                //     res.json({ success: false, from: "signup", message: "The email entered is already in use. Please, sign in or choose another email address."})
                // }
                //llega hasta acá lo nuevo que agregué
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
                    admin: false,
                })
                if (from !== "signup") {
                    await newuser.save()
                    res.json({ success: true, from: "Signup", message: "Congratulations, your account has been created with" + from })
                }
                else {
                    await newuser.save()
                    await sendEmail(email, newuser.uniqueString)
                    res.json({ success: true, from: "signup", message: "Please verify your mail and then log In" })
                }
            }

        }
        catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong. Try again in a few minutes" })
        }

    },
    userSignin: async (req, res,) => {
        const { email, password, from } = req.body.data
        try {
            const existingUser = await usuario.findOne({ email })
            if (!existingUser) {
                res.json({ success: false, message: "Your user has not been found please register" })
            }
            else {
                if (from !== "signin") {
                    let passwordMatch = existingUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: existingUser._id,
                            firtsName: existingUser.firstName,
                            lastName: existingUser.lastName,
                            image: existingUser.image,
                            email: existingUser.email,
                            admin: existingUser.admin
                        }
                        await existingUser.save()
                        const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 48 })
                        res.json({ response: { user: userData, success: true, from: from, message: "Welcome again" + userData.firtsName, token: token } })
                    }
                    else {
                        res.json({ success: false, form: from, message: "You have not register with " + from })

                    }
                }
                else {
                    if (existingUser.verifiedMail) {

                        let passwordMatch = existingUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if (passwordMatch.length > 0) {
                            const userData = {
                                id: existingUser._id,
                                firstName: existingUser.firstName,
                                lastName: existingUser.lastName,
                                image: existingUser.image,
                                from: existingUser.from,
                                email: existingUser.email,
                                admin: existingUser.admin

                            }
                            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 45 })
                            res.json({ success: true, from: from, response: { token, userData }, message: "Welcome again " + userData.firstName + " " + userData.lastName, })
                        }
                        else {
                            res.json({ success: false, from: from, message: "The mail or password is incorrect" })
                        }
                    }
                    else {
                        res.json({ success: false, from: from, message: "Email not verified, please verify it then log in" })
                    }
                }
            }

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something wnet wrong try again in a few minutes" })
        }
    },
    userLogout: async (req, res) => {
        const email = req.body.data
        const user = await usuario.findOne({ email })
        await user.save()
    },
    tokenVerified: (req, res) => {
        if (!req.err) {
            res.json({ success: true, response: { admin: req.user.admin, firstName: req.user.firstName, lastName: req.user.lastName, email: req.user.email, from: "token", message: "Welcome again " + req.user.firstName + " " + req.user.lastName, image: req.user.image } })
        }
        else {
            res.json({ success: false, })
        }
    }
}
module.exports = UserControllers