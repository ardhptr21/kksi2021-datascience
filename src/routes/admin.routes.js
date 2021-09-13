const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware.isAuth, adminController.index);
router.get("/video", authMiddleware.isAuth, adminController.video);
router.get("/file", authMiddleware.isAuth, adminController.file);

module.exports = router;
