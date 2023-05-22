const { Router } = require("express");
const productController = require("../../controllers/api/product-controller");

const router = Router();

router.post("/add", productController.add);
router.put("/modify/:id", productController.modify);
router.delete("/remove/:id", productController.remove);

module.exports = router;
