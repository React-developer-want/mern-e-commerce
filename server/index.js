const express = require('express');
const cors = require('cors');
const { createSession } = require('./controllers/create-session');
const morgan = require('morgan');
// const { verifyToken } = require('./middleware/verify-token');
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// app.use(verifyToken());

// checkout api
app.post('/api/v1/stripe/create-checkout-session', createSession);

app.listen(7000, ()=> {
  console.log("server has been started");
});