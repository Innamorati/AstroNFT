const Router = require('express').Router()
const UserControllers = require('../controllers/UserControlles')
const validator = require('../config/validator')
const passport = require('../config/Passport')

const { userRegistration, userSignin, verifyEmail, userLogout, tokenVerified } = UserControllers


Router.route('/user/singup')
    .post(validator, userRegistration);

Router.route('/user/signin')
    .post(userSignin);

Router.route('/verify/:uniqueString')
    .get(verifyEmail);

Router.route('/user/logout')
    .post(userLogout);

Router.route('/user/token')
    .get(passport.authenticate('jwt', { session: false }), tokenVerified)

module.exports = Router