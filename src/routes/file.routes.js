const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.get("/", fileController.index);
router.get("/form", fileController.form);

module.exports = router;
