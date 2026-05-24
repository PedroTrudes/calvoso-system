const productVariationService = require("../services/ProductVariationService");
const {createProductVariationSchema, updateProductVariationSchema} = require('../schema/product.variation.schema');

async function createProductVariation(req, res) {
    try {
        const {id} = req.params;
        const validatedData = createProductVariationSchema.parse(req.body);
        const data = {
            ...validatedData,
            product_id_FK: Number(id)
        };

        const variation = await productVariationService.createProductVariation(data);

        return res.status(201).json(variation);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getVariationByProductId(req, res) {
    try {
        const {id} = req.params;
        const productVariation = await productVariationService.findVariationByProduct(Number(id));

        return res.json(productVariation);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllProductVariation(req, res) {
    try {
        const productVariation = await productVariationService.findAllProductVariation();

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


module.exports = {
    createProductVariation,
    getAllProductVariation,
    getVariationByProductId,
    toggleVariation
}