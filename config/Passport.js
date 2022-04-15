const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/UserModels");

module.exports = passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    (jwt_payload, done) => {
      User.findOne({ _id: jwt_payload.id })
        .populate("basket.nftId", {
          price: 1,
          name: 1,
          file: 1,
          category: 1,
          fileType: 1,
          token: 1,
        })

        .then((user) => {
          if (user) {
            return done(null, user);
          } else if (err) {
            return done(err, false);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          console.log(err.status);
          return done(err, false);
        });
    }
  )
);
