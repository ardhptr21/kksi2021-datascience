module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/auth/login");
};

module.exports.isGuest = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.render("error/404", { navbar: "no" });
  }

  next();
};

module.exports.isSuperadmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "superadmin") {
    return next();
  }

  res.render("error/404", { navbar: "no" });
};
