const Router = require('express').Router()
const UserControllers = require('../controllers/UserControlles')

const { userRegistration, userLogin, verifyEmail } = UserControllers


Router.route('/user/singup')
    .post(userRegistration);

Router.route('/user/signin')
    .post(userLogin);

Router
    .route('/verify/:uniqueString')
    .get(verifyEmail);

module.exports = Router