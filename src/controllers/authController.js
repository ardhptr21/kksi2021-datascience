const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports.index = (req, res) => {
  res.render("auth/login", { navbar: "no" });
};
module.exports.register = (req, res) => {
  res.render("auth/register", { navbar: "no" });
};
module.exports.store = (req, res) => {
  const { username, password, superadmin } = req.body;
  User.create({ username, password: bcrypt.hashSync(password, 10), role: superadmin && "superadmin" }, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
};
