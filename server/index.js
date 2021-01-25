const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const verifyToken = require('./middlewares/verifyToken');

// Port
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/products', verifyToken, require('./routes/products'));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});