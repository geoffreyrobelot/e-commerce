const Product = require('../models/product')
const { writeProduct, rewriteProduct } = require('../modules/fs')
const ProductSchema = require('../models/product.schema')


exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.render('admin', { dataProducts: Product.fetchAll() });
}

exports.postAddProduct = async (req, res, next) => {
    const product = await new ProductSchema({
        ...req.body, isShown:true
    });
    const newProduct = await product.save();
    console.log(newProduct);
    
    res.redirect('/');
}

exports.removeProduct = (req, res, next) => {
    const products = Product.fetchAll()
    const newProduct = products.filter(product => product.id.toString() !== req.body.product_id.toString())
    rewriteProduct(newProduct)

    res.redirect('/admin')
}

exports.toggleShowProduct = (req, res, next) => {
    const products = Product.fetchAll()
    const newList = products.map(product => {
        if (product.id.toString() === req.body.product_id.toString()) {
            return {
                ...product,
                isShown: !product.isShown
            }
        } else {
            return product
        }
    })
    rewriteProduct(newList)

    res.redirect('/admin')
}