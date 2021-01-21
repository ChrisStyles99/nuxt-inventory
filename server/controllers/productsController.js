const connection = require('../database/db');
const productsController = {}

productsController.getAllProducts = (req, res) => {
  connection.execute('SELECT * FROM products', (err, results) => {
    if(err) return res.json({error: true, msg: err});

    res.json({error: false, products: results});
  });
}

productsController.getSingleProduct = (req, res) => {
  const {id} = req.params;
  connection.execute('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
    if(err) return res.json({error: true, msg: err});

    res.json({error: false, product: results});
  });
}

module.exports = productsController;