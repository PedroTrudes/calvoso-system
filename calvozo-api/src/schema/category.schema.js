const {z} = require('zod');

const createCategorySchema = z.object({
    name: z.string(),
    is_active: z.boolean()
}).strict();

const updateCategorySchema = createCategorySchema.partial();

module.exports = {
    createCategorySchema, updateCategorySchema
}