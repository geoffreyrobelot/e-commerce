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
* Joi validation for mongoose model without two schemas.
* Joi schema with parameters. 
*/
// const joiProductSchema = joi.object({
//     title: joi.string(),
//     price: joi.number()
//     .min(5)
//     .max(10000),
//     description: joi.string()
//     .min(5)
//     .max(250),
//     image: joi.string()
//     // isShown: joi.boolean()
// });

/*
* Convert joi schema to mangoose style schema.
*/ 
// const productSchema = new mongoose.Schema(
//     joigoose.convert(joiProductSchema)
//     );

/*
* Model creation.
*/    
const Product = mongoose.model('Product', productSchema);

/*
* Export.
*/
module.exports = Product;