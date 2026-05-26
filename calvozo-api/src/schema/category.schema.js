const {z} = require('zod');

const createCategorySchema = z.object({
    name: z.string().toLowerCase(),
    is_active: z.boolean()
}).strict();

const updateCategorySchema = createCategorySchema.partial();

module.exports = {
    createCategorySchema, updateCategorySchema
}