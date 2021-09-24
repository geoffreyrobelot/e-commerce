const Product = require('../models/product')
const { writeProduct, rewriteProduct } = require('../modules/fs')
const ProductSchema = require('../models/product.schema')


exports.getAddProduct = async (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    
    const products = await ProductSchema.find();
    console.log(products);
    // res.render('admin', { products: ProductSchema.find() });
    res.render('admin', {dataProducts: products});
}

exports.postAddProduct = async (req, res, next) => {
    console.log(req.file);
    try {  
    const product = await new ProductSchema({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.file.filename
    });
    await product.save();
    console.log(product);
    console.log('Produit ajouté avec succès');
    res.redirect('/');
    
    }
    catch (err) {
        console.log(err.message);
        console.log('Produit non ajouté');
    }
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