const express = require('express');
const productRoutes = require('./routes/ProductRoutes');

const app = express();

const PORT = 3333;
app.use(express.json());
app.use("/products", productRoutes);

app.get('/', (req, res) => {
    console.log('bateu na rota / ')
    return res.json({
        message: 'Api funcionando'
    })
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})