const Product = require('../models/product')
const ProductSchema = require('../models/product.schema')

exports.getProduct = async (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    // res.render('home', { dataProducts:Product.fetchAll() })
    try{
        const products = await ProductSchema.find();
        res.render('home', { dataProducts:products })
    }
   catch(err){
       console.log(err);
   }
}

// const Product = require('../models/Product')
// exports.postAddProduct = (req, res, next) => {
//     // products.push(req.body);
//     // console.log('PRODUCTS:: : ', products);
//     const product = new Product(req.body.title) // creer une instence de product
//     product.save();

//     res.redirect('/')
// }

// exports.getProducts = (req, res, next) => {
//     // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
//     const products = Product.fetchAll();
//     console.log('SHOP', products)
//     res.render('shop.ejs', { products: products })
// }