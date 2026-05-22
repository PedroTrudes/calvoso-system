const categoryService = require("../services/CategoryService");
const {createCategorySchema, updateCategorySchema} = require("../schema/category.schema");
const { json } = require("zod");

async function createCategory(req, res) {
    try {
        const dt = createCategorySchema.parse(req.body);
        const category = await categoryService.createCategory(dt);
        
        return res.status(201).json(category);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllCategory(req, res) {
    try {
        const category = await categoryService.findAllCategory();
        return res.json(category);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function updateCategory(req, res) {
    try {
        const {id} = req.params;
        const dt = updateCategorySchema.parse(req.body);
        const category = await categoryService.updateByIdCategory(Number(id), dt);

        return res.json(category);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function toggle(req, res) {
    try {
        const {id} = req.params;
        const category = await categoryService.toggleActive(Number(id));
        return res.json(category);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function deleteCategory(req, res) {
    try {
        const {id} = req.params;
        await categoryService.deleteCategory(Number(id));
        return res.status(200).json({message: "Categoria deletada"})

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

module.exports = {
    createCategory,
    getAllCategory,
    updateCategory,
    toggle,
    deleteCategory, 
}