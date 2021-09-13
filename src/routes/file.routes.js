const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.get("/", fileController.index);
router.get("/create", fileController.create);
router.post("/store", fileController.store);
router.route("/update/:id").get(fileController.edit).put(fileController.update);
router.delete("/delete/:id", fileController.remove);

module.exports = router;
