const { product } = require("../config/prisma");
const orderedService = require("../services/OrderedService");

async function createOrdered(req, res) {
    try {
        const data = req.body;
        const ordered = await orderedService.create(data);
        return res.status(201).json(ordered);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllOrdered(req, res) {
    try {
        const orderedList = await orderedService.getAll();

        return res.status(200).json(orderedList);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getByIdOrdered(req, res) {
    try {
        const {id} = req.params;
        const ordered = await orderedService.getById(Number(id));
        if(!ordered) {
            return res.status(200).json({message: "Não tem pedido"})
        }
        return res.status(200).json(ordered);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message});
    }
}

async function updateByIdOrdered(req, res) {
    try {
        const {id} = req.params;
        const dt = req.body;

        const ordered = await orderedService.update(Number(id), dt);

        return res.json(ordered)

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message});
    }
}

async function deleteByIdOrdered(req, res) {
    try {
        const {id} = req.params;
        const ordered = await orderedService.deleteById(Number(id));
        return res.json(ordered);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message});
    }
}

module.exports = {
    createOrdered,
    getAllOrdered,
    getByIdOrdered,
    updateByIdOrdered,
    deleteByIdOrdered
}