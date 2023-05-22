const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const productRoute = require("./product-route");
const stockRoute = require("./stock-route");

const router = Router();

router.get("/", mainController.showHome);

router.use("/producto", productRoute);

router.use("/stock", stockRoute);

module.exports = router;
