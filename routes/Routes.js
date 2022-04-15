const Router = require("express").Router();
const UserControllers = require("../controllers/UserControlles");
const ProductControllers = require("../controllers/ProductControllers");
const validator = require("../config/validator");
const passport = require("../config/Passport");

const {
  userRegistration,
  userSignin,
  verifyEmail,
  userLogout,
  tokenVerified,
  addToBasket,
  deleteToBasket,
} = UserControllers;
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getOneProduct,
} = ProductControllers;

Router.route("/products").get(getAllProducts).post(addProduct);

Router.route("/details/:id").get(getOneProduct);

Router.route("/product/:id").delete(deleteProduct).put(updateProduct);

Router.route("/user/singup").post(validator, userRegistration);

Router.route("/user/signin").post(userSignin);

Router.route("/verify/:uniqueString").get(verifyEmail);

Router.route("/user/token").get(
  passport.authenticate("jwt", { session: false }),
  tokenVerified
);

Router.route("/user/logout").post(userLogout);

Router.route("/bascket").post(addToBasket);

Router.route("/basket/:id").post(deleteToBasket);

module.exports = Router;
