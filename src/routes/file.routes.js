const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.get("/", fileController.index);

module.exports = router;
