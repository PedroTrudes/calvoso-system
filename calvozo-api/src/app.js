const express = require("express");

const productVariationRoutes = require("./routes/productVariationRoutes");
const productRoutes = require("./routes/ProductRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
const typeOrderRoutes = require("./routes/TypeOrderRoutes");
const orderedRoutes = require("./routes/OrderedRoutes");
const orderItemRoutes = require("./routes/OrderItemRoutes");

const app = express();

app.use(express.json());

app.use("/products/variation", productVariationRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/typeorder", typeOrderRoutes);
app.use("/ordered", orderedRoutes); 
app.use("/cart/item", orderItemRoutes)

module.exports = app;