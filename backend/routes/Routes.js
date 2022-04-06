const Router = require('express').Router()
const UserControllers = require('../controllers/UserControlles')

const { userRegistration } = UserControllers


Router.route('/user/singup')
    .post(userRegistration)

module.exports = Router