const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-product', adminController.postAddProduct);

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);


router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);
// /admin/add-product => GET
/*


// /admin/products => GET


// /admin/add-product => POST




*/

module.exports = router;
