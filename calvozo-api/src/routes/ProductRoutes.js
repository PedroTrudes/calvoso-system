const express = require("express");
const productController = require("../controllers/ProductController");

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/category/:id', productController.getProductsByCategory);
router.post('/', productController.createProduct);
router.patch('/:id/toggle', productController.toggle);
router.patch('/:id', productController.updateProduct)


module.exports = router;