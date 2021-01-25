const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if(!token) {
    return res.json({error: true, msg: 'Please provide a token'});
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified.id;
    next();
  } catch (error) {
    res.json({error: true, msg: error});
  }
}

module.exports = verifyToken;