const prisma = require("../config/prisma");

async function create(data) {
  return await prisma.product_variation.create({ data });
}

async function getAll() {
  return await prisma.product_variation.findMany({
    include: {
      product: true,
    },
  });
}

async function getById(id) {
  const productVariation = await prisma.product_variation.findUnique({
    where: { id: id },
    include: {
      product: true,
    },
  });
  if(!productVariation){
    throw new Error("Não temos variações desse produto");
  }

  return productVariation;
}

async function toggleActive(id) {
  const producVariation = await findByIdVariation(id);
  return await prisma.product_variation.update({
    where: {
      id: id,
    },
    data: {
      variation_active: !producVariation.variation_active,
    },
  });
}

async function getByProduct(id) {
  return await prisma.product_variation.findMany({
    where: {
      product_id_FK: id,
    },
    include: {
      product: true,
    },
  });
}

async function update(id, dt) {
  return await prisma.product_variation.update({where: {
    id: id
  },
  data: {
    ...dt
  }
})
}


module.exports = {
  create,
  getAll,
  getById,
  getByProduct,
  toggleActive,
  update
};
