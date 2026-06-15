const orderItemService = require("../services/OrderItemService");

async function createOrderItem(req, res) {
    try {
        const dt = req.body;
        const createItem = await orderItemService.create(dt);

        return res.status(201).json(createItem);
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllOrderItem(req, res) {
    try {
        const items = await orderItemService.getAll();
        return res.status(200).json(items) 
        
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getByIdOrderItem(req, res) {
    try {
        const {id} = req.params;
        const order = await orderItemService.getById(Number(id));
        if(!order){
            return res.status(200).json({message: "Não temos pedidos com esse ID"})
        }

        return res.status(200).json(order);

    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function updateOderItem(req, res) {
    try {
        const {id} = req.params;
        const dt = req.body;

        const order = await orderItemService.update(Number(id), dt);

        return res.status(200).json({message: "Produto atualizado com sucesso", data: order});
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function deleteOderItem(req, res) {
    try {
        const id = req.params.id;
        const order = orderItemService.getById(Number(id));
        if(!order){
            return res.status(200).json({message: "Não existe esse ID"});
        }
        await orderItemService.deleteById(Number(id));
        return res.status(200).json({message: "Excluido com sucesso"});
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

module.exports = {
    createOrderItem,
    getAllOrderItem,
    getByIdOrderItem,
    updateOderItem,
    deleteOderItem
}