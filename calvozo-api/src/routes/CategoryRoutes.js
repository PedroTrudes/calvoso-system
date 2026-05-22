const express = require("express");
const categoryController = require("../controllers/CategoryController");
const { category } = require("../config/prisma");

const router = express.Router();

router.get('/', categoryController.getAllCategory);
router.post('/', categoryController.createCategory);

router.patch('/:id', categoryController.updateCategory);
router.patch('/:id/toggle', categoryController.toggle);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;