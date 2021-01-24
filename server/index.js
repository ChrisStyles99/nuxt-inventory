const express = require('express');
const app = express();
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// Db connection
const connection = require('./database/db');

// Port
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});