const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const productRoute = require("./api/product-route");
const stockRoute = require("./api/stock-route");

const router = Router();

router.get("/", mainController.showHome);

router.use("/api/producto", productRoute);

router.use("/api/stock", stockRoute);

module.exports = router;
