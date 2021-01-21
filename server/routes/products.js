const {Router} = require('express');
const { getAllProducts } = require('../controllers/productsController');
const router = Router();

router.get('/', getAllProducts);
router.get('/:id');
router.post('/');
router.put('/edit/:id');
router.delete('/delete/:id');

module.exports = router;