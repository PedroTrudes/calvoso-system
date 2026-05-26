const express = require("express");
const orderedController = require("../controllers/OrderedController");

const router = express.Router();

router.post('/', orderedController.createOrdered);
router.get('/', orderedController.getAllOrdered);
router.get('/:id', orderedController.getByIdOrdered);
router.patch('/:id', orderedController.updateByIdOrdered);
router.delete('/:id', orderedController.deleteByIdOrdered);

module.exports = router;