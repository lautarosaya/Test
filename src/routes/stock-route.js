const { Router } = require("express");
const stockController = require("../controllers/stock-controller");

const router = Router();

router.get("/", stockController.showStock);

module.exports = router;
