const prisma = require("../config/prisma");

async function createProductVariation( data ) {
    return await prisma.product_variation.create({data});
}

async function findAllProductVariation() {
    return await prisma.product_variation.findMany({
        include: {
            product: true
        }
    })
}

async function findVariationByProduct(id) {
    return await prisma.product_variation.findMany({where: {
        product_id_FK: id
    },
    include: {
        product: true
    }
})
}

module.exports = {
    createProductVariation,
    findAllProductVariation,
    findVariationByProduct
}