const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:Number,
    description:String,
    isShown:Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;