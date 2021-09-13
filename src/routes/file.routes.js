const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", fileController.index);
router.get("/create", authMiddleware.isAuth, fileController.create);
router.post("/store", authMiddleware.isAuth, fileController.store);
router.route("/update/:id").get(authMiddleware.isAuth, fileController.edit).put(authMiddleware.isAuth, fileController.update);
router.delete("/delete/:id", authMiddleware.isAuth, fileController.remove);

module.exports = router;
