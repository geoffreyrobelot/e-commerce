const { v4: uuidv4 } = require('uuid');
const dataProducts = require("../products.json")
module.exports = class Product {
    constructor(product) {
            this.title = product.title
            this.price = product.price
            this.description = product.description
        }
        // new Product({obj})

    save() {
        const newProduct = {
            ...this, 
            id: uuidv4(),
            category: "none",
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        }
        return newProduct;
    }

    static fetchAll() {
        return dataProducts;
    }
}