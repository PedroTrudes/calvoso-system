const prisma = require("../config/prisma");

async function create(data) {
    return await prisma.type_order.create({data});
}
async function getAll() {
    return await prisma.type_order.findMany();
}

async function getById(id) {
    const typeOrder = await prisma.type_order.findUnique({where: {
        id: id
    }});
    return typeOrder;
}

async function update(id, dt) {
    return await prisma.type_order.update({where: {id: id},
    data: {
        ...dt
    }});
}

async function deleteById(id) {
    return await prisma.type_order.delete({where: {
        id: id
    }});
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteById
}