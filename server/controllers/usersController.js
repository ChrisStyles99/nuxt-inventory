const connection = require('../database/db');
usersController = {}

usersController.login = (req, res) => {
  const {email, password} = req.body;

  connection.execute('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
    if(err) return res.json({error: true, msg: err});

    if(result.length < 0) {
      return res.json({error: true, msg: 'No user found with that email'});
    }
  });
}

usersController.register = (req, res) => {
  const {name, email, password} = req.body;
}

module.exports = usersController;