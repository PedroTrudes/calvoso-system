const prisma = require("../config/prisma");

async function recalculateTotalPrice(orderId) {
    const items = await prisma.order_item.findMany({where: 
        {order_id_FK: orderId}});

    const total = items.reduce((acc, item) => {
        let priceByAmount = Number(item.unit_price) * Number(item.amount)
        return acc + priceByAmount;
    }, 0);

    await prisma.ordered.update({where: {
        id: orderId
    },
    data: {
        total_price: total
    }
})
}

async function create(data) {
    return await prisma.ordered.create({data: {
        ...data,
        creatAt: new Date(),
        total_price: 0
    }});
}

async function getAll() {
    return await prisma.ordered.findMany({
        orderBy: {
            creatAt: 'desc',
        }
    });
}

async function getById(id) {
    const ordered = await prisma.ordered.findUnique({where: {
        id: id
    },
    include: {
        order_item: true
    }
});
    return ordered;
}

async function update(id, data) {
    return await prisma.ordered.update({
        where: {id: id}, 
        data: {...data}});    
}

async function deleteById(id) {
    const ordered = await getById(id);
    if(ordered.order_item.length > 0){
        const dt = {status_operation: "cancelado"};
        const updatedOrdered = await update(id, dt);
        return {message: "Pedido cancelado",
            order: updatedOrdered
        }
    }

    await prisma.ordered.delete({where: {id: id}});

    return {message: "Pedido deletado"};

}

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteById
}