const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);


const productSchema = new mongoose.Schema({
    title:{type:String,
        required:true},
    price:{type:Number, 
        required:true},
    description:String,
    image: String,
    isShown:Boolean,
});

/*
* Model creation.
*/    
const Product = mongoose.model('Product', productSchema);

/*
* Export.
*/
module.exports = Product;