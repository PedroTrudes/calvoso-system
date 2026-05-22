const express = require('express');

const productVariationRoutes = require('./routes/productVariationRoutes');
const productRoutes = require('./routes/ProductRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');

const app = express();

app.use(express.json());

app.use("/products/variation", productVariationRoutes);
app.use('/products', productRoutes)
app.use("/categories", categoryRoutes);

module.exports = app;