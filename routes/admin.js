const express = require('express');
const router = express.Router();

const productController = require('../controllers/admin')

router.get('/', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);
router.post('/remove', productController.removeProduct)
router.post('/unshow', productController.toggleShowProduct)

// module.exports.products = products;
module.exports.routes = router;