const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");

router
  .route("/login")
  .get(authController.index)
  .post(
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth/login",
      failureFlash: true,
    })
  );
router.route("/register").get(authController.register).post(authController.store);

module.exports = router;
