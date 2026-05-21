const prisma = require('../config/prisma');

async function validateProductExists(req, res, next) {
    const {id} = req.params;

    const product = await prisma.product.findUnique({where: {
        id: Number(id)
    }
});
    if(!product){
        return res.status(404).json({
            message: "Produto não localizado"
        });
    }

    req.product = product;

    next();
}


module.exports = {
    validateProductExists
}