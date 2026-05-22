const {z} = require('zod');

const createProductVariationSchema = z.object({
    product_id_FK: z.number(),
    name: z.string(),
    price: z.coerce.number().positive(),
    variation_active: z.boolean(),
})

const updateProductVariationSchema = createProductVariationSchema.partial();

module.exports = {
    createProductVariationSchema, updateProductVariationSchema
}