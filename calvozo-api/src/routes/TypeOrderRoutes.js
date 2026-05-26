const express = require("express");
const typeOrderController = require("../controllers/TypeOrderController");

const router = express.Router();

router.post('/', typeOrderController.createTypeOrder);
router.get('/', typeOrderController.getAllTypeOrder);
router.get('/:id', typeOrderController.getByIdTypeOrder);
router.patch('/:id', typeOrderController.updateByIdTypeOrder);
router.delete('/:id', typeOrderController.deleteByIdTypeOrder);

module.exports = router;