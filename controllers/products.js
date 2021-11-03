const Product = require('../models/product');
const ProductSchema = require('../models/product.schema');
const mongoose = require('mongoose');

exports.getProducts = async (req, res, next) => {
    try{
        const products = await ProductSchema.find();
        res.render('home', { dataProducts:products })
    }
   catch(err){
       console.log(err);
   }
};

exports.getOneProduct = async(req, res, next) => {
    try {
        const product = await ProductSchema.findOne({_id:req.params.id});
        res.render('oneProduct', { product });
    } catch (err) {
        console.log(err);
    }
};


















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
