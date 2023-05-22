const { Router } = require("express");
const stockController = require("../../controllers/api/stock-controller");

const router = Router();

router.get("/", stockController.showStock);

module.exports = router;
