const express = require("express");
const orderItemController = require("../controllers/OrderItemController");

const app = express.Router();

app.post('/', orderItemController.createOrderItem);
app.get('/', orderItemController.getAllOrderItem);
app.get('/:id', orderItemController.getByIdOrderItem);
app.patch('/:id', orderItemController.updateOderItem);
app.delete('/:id', orderItemController.deleteOderItem);


module.exports = app;