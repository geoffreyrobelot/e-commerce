const Product = require('../models/product');
const ProductSchema = require('../models/product.schema');
const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId(); 

exports.getProducts = async (req, res, next) => {
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

exports.getOneProduct = async(req, res, next) => {
    try {
        const product = await ProductSchema.findOne({_id:req.params.id});
        res.render('oneProduct', { product });
    } catch (err) {
        console.log(err);
    }
}
    // ProductSchema.findById(req.params.id, (err, doc) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log(doc.image);
    //     }
    //     res.render('oneProduct', { product:doc });
    

    // console.log("param :", req.params.id);
    // try {
    // const product = await ProductSchema.findById({_id:req.params.id});
    // console.log(typeof(product._id));
    // console.log(typeof(req.params.id));
    // res.render('oneProduct', {product:product});
    // }
    // catch (err) {
    //     console.log(err);
    // }
    

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