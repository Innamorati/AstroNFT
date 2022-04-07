const dotenv = require('dotenv');

// *Useful for getting environment vairables
dotenv.config();
const usuario = require('../models/UserModels')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
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
        else {
            console.log("Mensaje enviado")

        }
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
                        await sendEmail(email, existingUser.uniqueString)
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
                    await sendEmail(email, newuser.uniqueString)
                    res.json({ success: true, from: "signup", message: "Please verify your mail and then log In" })
                }
            }

        }
        catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong try in a few minutes" })
        }

    },
    userLogin: async (req, res) => {
        const { email, password, from } = req.body.data;


    }
}
module.exports = UserControllers