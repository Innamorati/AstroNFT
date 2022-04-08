const Router = require('express').Router()
const UserControllers = require('../controllers/UserControlles')
const validator = require('../config/validator')

const { userRegistration, userLogin, verifyEmail } = UserControllers


Router.route('/user/singup')
    .post(validator, userRegistration);

// Router.route('/user/signin')
//     .post(userLogin);

Router
    .route('/verify/:uniqueString')
    .get(verifyEmail);

module.exports = Router