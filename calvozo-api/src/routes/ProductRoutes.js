const express = require("express");
const productController = require("../controllers/ProductController");
const {validateProductExists} = require("../middlewares/product.middleware");

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:id', productController.getByIdProduct);
router.get('/category/:id', productController.getProductsByCategory);
router.post('/', productController.createProduct);
router.patch('/:id/toggle', validateProductExists, productController.toggle);
router.patch('/:id', validateProductExists, productController.updateProduct)


module.exports = router;