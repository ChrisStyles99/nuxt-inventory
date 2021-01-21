const {Router} = require('express');
const { getAllProducts, getSingleProduct, addProduct, editProduct } = require('../controllers/productsController');
const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', addProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id');

module.exports = router;