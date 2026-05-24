const prisma = require("../config/prisma");

async function createProductVariation(data) {
  return await prisma.product_variation.create({ data });
}

async function findAllProductVariation() {
  return await prisma.product_variation.findMany({
    include: {
      product: true,
    },
  });
}

async function findByIdVariation(id) {
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

async function findVariationByProduct(id) {
  return await prisma.product_variation.findMany({
    where: {
      product_id_FK: id,
    },
    include: {
      product: true,
    },
  });
}

module.exports = {
  createProductVariation,
  findAllProductVariation,
  findByIdVariation,
  findVariationByProduct,
  toggleActive,
};
