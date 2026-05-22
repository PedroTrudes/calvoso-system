const prisma = require("../config/prisma");

async function createCategory(data) {
    return await prisma.category.create({data});
}

async function findAllCategory() {
    return await prisma.category.findMany();
}

async function findByIdCategory(id) {
    const category = await prisma.category.findUnique({where: {
        id: id
    }})
    return category;
}

async function updateByIdCategory(id, dt) {
    return await prisma.category.update({where: {
        id: id
    },
    data: {
        ...dt
    }
})
}

async function toggleActive(id) {
    const category = await findByIdCategory(id);
    return await prisma.category.update({where: {
        id: id
    },
    data: {
        is_active: !category.is_active
    }
})
}

async function deleteCategory(id) {
    await findByIdCategory(id);

    const productInCategory = await prisma.product.count({where: {
        category_id_FK: id
    }});
    
    if(productInCategory.length > 0){
        throw new Error("Produtos vinculados à categoria, não é possível excluir");
    }
    return await prisma.category.delete({where: {
        id: id
    }})
}

module.exports = {
    createCategory,
    findAllCategory, 
    findByIdCategory,
    updateByIdCategory,
    toggleActive, 
    deleteCategory 
}