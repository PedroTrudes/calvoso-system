const productService = require('../services/ProductService');

async function getProducts(req, res) {
    try {
        const product = await productService.findAllProduct();
        return res.json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'internal server error'});
    }
}

async function getProductsByCategory(req, res) {
    try {
        const {id} = req.params;
        const listProductByCategory = await productService.findAllProductByCategory(Number(id));
        console.log(listProductByCategory);
        return res.status(200).json(listProductByCategory);
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.create(req.body);
        console.log(product);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({message: error});
    }
}



async function toggle(req, res) {
    try {
        const {id} = req.params;
        const product = await productService.toggleActive(Number(id));

        return res.json(product);
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

module.exports = {
    getProducts, getProductsByCategory, createProduct, toggle
}