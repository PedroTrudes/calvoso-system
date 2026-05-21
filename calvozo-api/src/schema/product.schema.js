const {z} = require('zod');
const { category } = require('../config/prisma');

const createProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    menu_active: z.boolean(),
    category_id_FK: z.number()
}).strict()

const updateProductSchema = createProductSchema.partial();

module.exports = {
    createProductSchema, updateProductSchema
}