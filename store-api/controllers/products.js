const Product = require('../models/product')


const getAllProductsStatic = async (req,res)=>{
    // throw new Error('testing async errors')
    const products = await Product.find({
        name: 'vase table'
    })
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts = async (req,res)=>{
    const {featured} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true'? true: false
    }
    const products = await Product.find({featured:true})
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}       

