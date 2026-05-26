const typeOrderService = require('../services/TypeOrderService');
const {createTypeOrderSchema, updateTypeOrderSchema} = require("../schema/type.order.schema");

async function createTypeOrder(req, res) {
    try {
        const dt = createTypeOrderSchema.parse(req.body);
        const typeOrder = await typeOrderService.create(dt);

        res.status(201).json(typeOrder);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllTypeOrder(req, res) {
    try {
        const typeOrders = await typeOrderService.getAll();
        if(typeOrders.length == 0){
            return res.status(200).json({message: "Não temos tipos de pedidos registrados"})
        }

        return res.status(200).json(typeOrders);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getByIdTypeOrder(req, res) {
    try {
        const {id} = req.params;
        const typeOrder = await typeOrderService.getById(Number(id));

        return res.status(200).json(typeOrder);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}


async function updateByIdTypeOrder(req, res) {
    try {
        const {id} = req.params;
        const dt = updateTypeOrderSchema.parse(req.body);
        const typeOrderUpdated = await typeOrderService.update(Number(id), dt);

        return res.status(200).json(typeOrderUpdated);
        
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function deleteByIdTypeOrder(req, res) {
    try {
        const {id} = req.params;
        await typeOrderService.deleteById(Number(id));

        return res.status(200).json({message: "Excluido com sucesso"});
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

module.exports = {
    createTypeOrder,
    getAllTypeOrder,
    getByIdTypeOrder,
    updateByIdTypeOrder,
    deleteByIdTypeOrder
}