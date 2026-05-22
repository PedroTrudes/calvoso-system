const express = require("express");
const productVariationController = require("../controllers/ProductVariationController");

const router = express.Router();

router.get('/', productVariationController.getAllProductVariation);
router.post('/:id', productVariationController.createProductVariation);
router.get('/:id', productVariationController.getVariationByProductId);

module.exports = router;