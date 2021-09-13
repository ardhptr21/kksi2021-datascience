const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.get("/", videoController.index);
router.get("/create", videoController.create);
router.post("/store", videoController.store);
router.route("/update/:id").get(videoController.edit).put(videoController.update);
router.delete("/delete/:id", videoController.remove);

module.exports = router;
