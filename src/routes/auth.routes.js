const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");

router
  .route("/login")
  .get(authMiddleware.isGuest, authController.index)
  .post(
    authMiddleware.isGuest,
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth/login",
      failureFlash: true,
    })
  );
router.route("/register").get(authMiddleware.isSuperadmin, authController.register).post(authMiddleware.isSuperadmin, authController.store);

module.exports = router;
