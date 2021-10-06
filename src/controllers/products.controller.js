const Product = require('../models/product');
const productCtrl = {}


productCtrl.getOne = async (req,res) =>
{
    try
    {
        var id = req.params.id;
        var product = await Product.findById(id);
        res.json(product)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    }

    
}

productCtrl.getAll = async (req,res) =>
{
    try
    {
        var products = await Product.find();
        res.json(products)
    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    }

    
}

productCtrl.createOne = async (req,res) =>
{
    try
    {
        var productData = req.body;
    
        var product = new Product(productData);
    
       await product.save();

     res.json({msg:" Product created"})

    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    }
   
   
 

}

productCtrl.updateOne = async (req,res) =>
{
    try
    {
        var data = req.body;
        var id = req.params.id;
        await  Product.findByIdAndUpdate(id,data)

        res.json({msg:"Product updated"});

    
    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    }
   
   
 

}
productCtrl.deleteOne = async (req,res) =>
{
    try
    {
        var id = req.params.id;

        await  Product.findByIdAndDelete(id)
      

        res.json({msg:"Product deleted"});

    
    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    }
   
   
 

}

module.exports = productCtrl;


























