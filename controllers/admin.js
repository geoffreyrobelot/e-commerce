const Product = require('../models/product')

const { writeProduct } = require('../modules/fs')
exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    res.render('admin');
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body);
    const newProduct = product.save();
    writeProduct(newProduct);
    res.redirect('/');
    res.end();
}