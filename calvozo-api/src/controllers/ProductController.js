const productService = require('../services/ProductService');
const {createProductSchema, updateProductSchema} = require('../schema/product.schema');


async function createProduct(req, res) {
    try {
        const dt = createProductSchema.parse(req.body);
        const product = await productService.create(dt);
        console.log(product);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

async function getProducts(req, res) {
    try {
        const product = await productService.findAllProduct();
        return res.json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'internal server error'});
    }
}

async function getByIdProduct(req, res) {
    try {
        const {id} = req.params
        const product = await productService.findByIdProduct(Number(id));

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
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

async function toggle(req, res) {
    try {
        const {id} = req.params;
        const product = await productService.toggleActive(Number(id));
        return res.json(product);
    } catch (error) {
        return res.status(500).json({message: error});
    }
}

async function updateProduct(req, res) {
    try {
        const {id} = req.params;
        const dt = updateProductSchema.parse(req.body);
        const productUpdate = await productService.update(Number(id), dt);
        return res.json(productUpdate);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message});
    }
}

module.exports = {
    getProducts, getProductsByCategory, createProduct, toggle, updateProduct, getByIdProduct
}