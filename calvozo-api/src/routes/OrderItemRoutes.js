const express = require("express");
const OrderItemController = require("../controllers/OrderItemController");

const app = express.Router();

app.post('/', OrderItemController.createOrderItem);
app.get('/', OrderItemController.getAllOrderItem);


module.exports = app;