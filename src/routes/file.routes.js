const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.get("/", fileController.index);
router.get("/form", fileController.form);
router.post("/store", fileController.store);

module.exports = router;
