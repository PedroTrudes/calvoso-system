const {z} = require('zod');

const createTypeOrderSchema = z.object({
    name_type: z.string().toLowerCase(),
    charge: z.coerce.number()
});

const updateTypeOrderSchema = createTypeOrderSchema.partial();

module.exports = {
    createTypeOrderSchema, updateTypeOrderSchema
}