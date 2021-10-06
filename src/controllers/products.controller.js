const Product = require('../models/product');
const productCtrl = {}

productCtrl.getAll = (req,res) =>
{
    var products = [{
        name:"Product1",
    },
    {
        name:"Product2"
    }]
    res.json(products)
}

productCtrl.createOne = async (req,res) =>
{
    var productData = req.body;
    
    var product = new Product(productData);

   await product.save();
   //1. Crear producto en la base de datos
   

   res.json({msg:" Product created"})
   //2. Dar respuesta que se añadio correctamente
}

module.exports = productCtrl;


























