const Router = require("express").Router();
const UserControllers = require("../controllers/UserControlles");
const ProductControllers = require("../controllers/ProductControllers");
const validator = require("../config/validator");

const { userRegistration, userSignin, verifyEmail, userLogout } = UserControllers;
const { getAllProducts, addProduct, deleteProduct } = ProductControllers;

Router
    .route("/products")
    .get(getAllProducts)
    .post(addProduct);

Router
    .route("/product/:id")
    .delete(deleteProduct);

Router.route("/user/singup").post(validator, userRegistration);

Router.route("/user/signin").post(userSignin);

Router.route("/verify/:uniqueString").get(verifyEmail);

Router.route("/user/logout").post(userLogout);

module.exports = Router;
