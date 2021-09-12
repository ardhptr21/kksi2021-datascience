const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get("/video", adminController.video);
router.get("/file", adminController.file);

module.exports = router;
