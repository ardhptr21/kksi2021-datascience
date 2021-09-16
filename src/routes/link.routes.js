const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", linkController.index);
router.get("/create", authMiddleware.isAuth, linkController.create);
router.post("/store", authMiddleware.isAuth, linkController.store);
router.route("/update/:id").get(authMiddleware.isAuth, linkController.edit).put(authMiddleware.isAuth, linkController.update);
router.delete("/delete/:id", authMiddleware.isAuth, linkController.remove);

module.exports = router;
