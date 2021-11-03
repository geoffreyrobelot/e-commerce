const express = require('express');
const router = express.Router();
const multer = require('../utiles/multer');
const loginController = require('../controllers/login');

router.get('/login');
router.post('/login', loginController.postAddUser);

// module.exports.products = products;
module.exports.routes = router;