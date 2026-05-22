const prisma = require("../config/prisma");

async function create(data) {
    return await prisma.product.create({data});
}

async function findAllProduct() {
    return await prisma.product.findMany();
}

async function findByIdProduct(id) {
    const product = await prisma.product.findUnique({where: {
        id: id
    }});
    if(!product){
        throw new Error("Produto não localizado");
    }
    return product;

}

async function findAllProductByCategory(id) {
    const products = await prisma.product.findMany({where: {
        category_id_FK: id
    }})

    return products;
}

async function toggleActive(id) {
    const product = await findByIdProduct(id);
    return await prisma.product.update({where: {
        id: id
    },
    data: {
        menu_active: !product.menu_active
    }
})
}

async function update(id, dt) {    
    return await prisma.product.update({where: {
        id: id 
    },
    data: {
        ...dt
    }
})
}

async function findProductWithVariation() {
    return await prisma.product.findMany({
        include: {
            product_variation: true
        }
    })
}


module.exports = {
    findAllProduct, 
    findAllProductByCategory, 
    create, 
    toggleActive, 
    update, 
    findByIdProduct,
    findProductWithVariation
};