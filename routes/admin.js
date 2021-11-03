const express = require('express');
const router = express.Router();
const multer = require('../utiles/multer');
const productController = require('../controllers/admin');

router.get('/', productController.getAddProduct);
router.get('/', productController.getAddUser);
router.post('/add-user', productController.postAddUser);
router.post('/add-product', multer.single('image'), productController.postAddProduct);
router.post('/remove', productController.removeProduct);
router.post('/unshow', productController.toggleShowProduct);


// module.exports.products = products;
module.exports.routes = router;