module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/auth/login");
};

module.exports.isGuest = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }

  next();
};

module.exports.isSuperadmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "superadmin") {
    console.log(req.user);
    return next();
  }

  return res.redirect("/");
};
