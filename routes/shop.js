const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/products')

router.get('/', productController.getProducts);
router.get('/show-product/:id', productController.getOneProduct);

module.exports.routes = router;