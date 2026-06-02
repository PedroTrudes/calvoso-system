const prisma = require("../config/prisma");

async function create(dt) {
    return await prisma.order_item.create({dt});
}

async function getAll() {
    return await prisma.order_item.findMany();
}

async function getById(id) {
    return await prisma.order_item.findUnique({where: { id : id }})
}

async function update(id, dt) {
    return await prisma.order_item.update({where: {id: id},
    data: {...dt}});
}

async function deleteById(id) {
    return await prisma.order_item.delete({where: {id: id}})
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteById
}