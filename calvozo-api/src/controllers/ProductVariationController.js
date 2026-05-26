const productVariationService = require("../services/ProductVariationService");
const {createProductVariationSchema, updateProductVariationSchema} = require('../schema/product.variation.schema');

async function createVariation(req, res) {
    try {
        const {id} = req.params;
        const validatedData = createProductVariationSchema.parse(req.body);
        const data = {
            ...validatedData,
            product_id_FK: Number(id)
        };

        const variation = await productVariationService.create(data);

        return res.status(201).json(variation);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getVariationByProductId(req, res) {
    try {
        const {id} = req.params;
        const productVariation = await productVariationService.getByProduct(Number(id));

        return res.json(productVariation);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllProductVariation(req, res) {
    try {
        const productVariation = await productVariationService.getAll();

        return res.json(productVariation);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function toggleVariation(req, res) {
    try {
        const {id} = req.params;
        const productVariation = await productVariationService.toggleActive(Number(id));
        return res.json(productVariation);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function updateVariation(req, res) {
    try {
        const {id} = req.params;
        const dt = req.body;

        const variation = await productVariationService.update(Number(id), dt);

        return res.json(variation);
        
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}


module.exports = {
    createVariation,
    getAllProductVariation,
    getVariationByProductId,
    toggleVariation,
    updateVariation
}