const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (user == null) return done(null, false, { message: "No user with that username" });

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) return done(err);
        if (!result) return done(null, false, { message: "Password incorrect" });

        return done(null, user);
      });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ id }, (err, user) => {
    if (err) return done(err);

    return done(null, user);
  });
});
