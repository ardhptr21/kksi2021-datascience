const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", videoController.index);
router.get("/create", authMiddleware.isAuth, videoController.create);
router.post("/store", authMiddleware.isAuth, videoController.store);
router.route("/update/:id").get(authMiddleware.isAuth, videoController.edit).put(authMiddleware.isAuth, videoController.update);
router.delete("/delete/:id", authMiddleware.isAuth, videoController.remove);

module.exports = router;
