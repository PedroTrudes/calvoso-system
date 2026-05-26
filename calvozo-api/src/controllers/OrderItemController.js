const OrderItemService = require("../services/OrderItemService");

async function createOrderItem(res, res) {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

async function getAllOrderItem(req, res) {
    try {
        const items = await OrderItemService.getAll();
        return res.status(200).json(items) 
        
    } catch (error) {
        return res.status(500).json({message: error.erros || error.message})
    }
}

module.exports = {
    createOrderItem,
    getAllOrderItem
}