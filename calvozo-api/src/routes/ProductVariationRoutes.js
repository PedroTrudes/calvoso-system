const express = require("express");
const productVariationController = require("../controllers/ProductVariationController");

const router = express.Router();

router.post('/:id', productVariationController.createVariation);
router.get('/', productVariationController.getAllProductVariation);
router.get('/:id', productVariationController.getVariationByProductId);
router.patch('/:id/toggle', productVariationController.toggleVariation)
router.patch('/:id', productVariationController.updateVariation)

module.exports = router;