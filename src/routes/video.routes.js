const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.get("/", videoController.index);
router.get("/form", videoController.form);
router.post("/store", videoController.store);

module.exports = router;
