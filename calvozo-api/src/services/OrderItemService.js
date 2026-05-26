const prisma = require("../config/prisma");

async function getAll() {
    return await prisma.order_item.findMany();
}

module.exports = {
    getAll
}