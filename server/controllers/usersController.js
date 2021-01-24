const connection = require('../database/db');
const bcrypt = require('bcrypt');
usersController = {}

usersController.login = (req, res) => {
  const {email, password} = req.body;

  connection.execute('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if(err) return res.json({error: true, msg: err});

    if(result.length == 0) {
      return res.json({error: true, msg: 'No user found with that email'});
    }

    const validPassword = await bcrypt.compare(password, result[0].password);

    if(validPassword) {
      res.json({error: false, msg: 'You are now logged in'});
    } else {
      res.json({error: true, msg: 'Password does not match'});
    }
  });
}

usersController.register = (req, res) => {
  const {name, email, password} = req.body;
  connection.execute('SELECT * FROM users WHERE email = ?', [email], async(err, result) => {
    if(err) return res.json({error: true, msg: err});

    if(result.length > 0) {
      return res.json({error: true, msg: 'The email already exists'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    connection.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
      if(err) return res.json({error: true, msg: err});

      res.json({error: false, msg: 'Successfully registered user'});
    })
  });
}

module.exports = usersController;