const prisma = require("../config/prisma");

async function findAllProduct() {
    return await prisma.product.findMany();
}

async function findAllProductByCategory(id) {
    const products = await prisma.product.findMany({where: {
        category_id_FK: id
    }})

    return products;
}

async function create(data) {
    return await prisma.product.create({data});
}

async function toggleActive(id) {
    const product = await prisma.product.findUnique({where: {
        id: id
    }});
    if(!product){
        throw new Error("Produto não localizado");
    }
    return await prisma.product.update({where: {
        id: id
    },
    data: {
        menu_active: !product.menu_active
    }
})
}


module.exports = {
    findAllProduct, findAllProductByCategory, create, toggleActive
};