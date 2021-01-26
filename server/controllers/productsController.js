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

    if(results.length < 1) return res.json({error: true, msg: "Couldn't find a product with that id"});

    res.json({error: false, product: results});
  });
}

productsController.addProduct = (req, res) => {
  const {name, description, quantity, image_url} = req.body;
  const quantityInt = parseInt(quantity);
  const category = 'To be rated';
  connection.execute('INSERT INTO products (name, description, quantity, image_url, category) VALUES (?, ?, ?, ?, ?)', [name, description, quantityInt, image_url, category], (err, result) => {
    if(err) return res.json({error: true, msg: err});

    res.json({error: false, msg: 'Added new product'});
  });
}

productsController.editProduct = (req, res) => {
  const {id} = req.params;
  const {name, description, quantity, image_url} = req.body;
  let category = req.body.category;
  category = 'To be rated';
  const quantityInt = parseInt(quantity);
  console.log(name, description, quantityInt, image_url, category, id);
  connection.execute('UPDATE products SET name = ?, description = ?, quantity = ?, image_url = ?, category = ? WHERE id = ?', [name, description, quantityInt, image_url, category, id], (err, result) => {
    if(err) return res.json({error: true, msg: err});

    res.json({error: false, msg: 'Edited product successfully'});
  });
}

productsController.deleteProduct = (req, res) => {
  const {id} = req.params;
  connection.execute('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if(err) return res.json({error: true, msg: err});

    res.json({error: false, msg: 'Deleted product successfully'});
  });
}

module.exports = productsController;