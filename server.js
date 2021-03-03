const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.json());

app.use('/sendtome', require('./routes/sendToMe'));

app.listen(PORT, () => {
  console.log(`app is live on ${PORT}`);
});;
