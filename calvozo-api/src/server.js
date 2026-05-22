const express = require('express');
const productRoutes = require('./routes/ProductRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');

const app = express();

const PORT = 3333;
app.use(express.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})