// const express = require('express');
// const app = express();
// require('dotenv').config();
// const morgan = require('morgan');
// const nodemailer = require('nodemailer');
// const port = 4444;

// app.use(morgan('dev'));

// app.use(express.json());

// app.use('/sendtome', require('./routes/sendToMe'));

// app.listen(port, () => {
//   console.log(`app is live on ${port}`);
// });;
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const exphbs = require('express-handlebars');
// // const path = require('path');
// // const nodemailer = require('nodemailer');

// // const server = express();

// // // View engine setup
// // server.engine('handlebars', exphbs());
// // server.set('view engine', 'handlebars');

// // // Static folder
// // server.use('/public', express.static(path.join(__dirname, 'public')));

// // // Body Parser Middleware
// // server.use(bodyParser.urlencoded({ extended: false }));
// // server.use(bodyParser.json());

// // server.get('/', (req, res) => {
// //   res.render('container');
// // });

// // server.post('/send', (req, res) => {
// //   const output = `
// //     <p>You have a new contact request</p>
// //     <h3>Contact Details</h3>
// //     <ul>
// //       <li>Name: ${req.body.name}</li>
// //       <li>Email: ${req.body.email}</li>
// //       <li>Subject: ${req.body.subject}</li>

// //     </ul>
// //     <h3>Message</h3>
// //     <p>${req.body.message}</p>
// //   `;

// //   // create reusable transporter object using the default SMTP transport
// //   let transporter = nodemailer.createTransport({
// //     host: 'smtp-relay.gmail.com',
// //     port: 587,
// //     secure: false, // true for 465, false for other ports
// //     auth: {
// //       user: 'conik763@gmail.com', // generated ethereal user
// //       pass: 'Valera62321200'  // generated ethereal password
// //     },
// //     tls: {
// //       rejectUnauthorized: false
// //     }
// //   });

// //   // setup email data with unicode symbols
// //   let mailOptions = {
// //     from: '"Nodemailer Contact" <conik763@gmail.com>', // sender address
// //     to: 'dev.samoilenko@gmail.com', // list of receivers
// //     subject: 'Paw-Luk Energy', // Subject line
// //     text: 'Hello world?', // plain text body
// //     html: output // html body
// //   };

// //   // send mail with defined transport object
// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       return console.log(error);
// //     }
// //     console.log('Message sent: %s', info.messageId);
// //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

// //     res.render('contact', { msg: 'Email has been sent' });
// //   });
// // });

// // server.listen(3000, () => console.log('Server started...'));




// // // const express = require('express');
// // // const nodemailer = require('nodemailer');
// // // const cors = require('cors');
// // // const { getDefaultNormalizer } = require('@testing-library/react');
// // // require("dotenv").config();

// // // const transporter = nodemailer.createTransport({
// // //   host: "smtp-relay.gmail.com", //replace with your email provider
// // //   port: 587,
// // //   auth: {
// // //     user: process.env.'dev.samoilenko@gmail.com',
// // //     pass: process.env.'Valera62321200'
// // //   }
// // // });

// // // transporter.verify(function (error, success) {
// // //   if (error) {
// // //     console.log(error);
// // //   } else {
// // //     console.log("Server is ready to take our messages");
// // //   }
// // // });

// // // app.post('/send', (req, res, next) => {
// // //   var name = req.body.name;
// // //   var email = req.body.email;
// // //   var subject = req.body.subject;
// // //   var message = req.body.message;

// // //   var mail = {
// // //     from: name,
// // //     to: // receiver email,
// // //       subject: subject,
// // //     text: message
// // //   };

// // //   transporter.sendMail(mail, (err, data) => {
// // //     if (err) {
// // //       res.json({
// // //         status: 'fail'
// // //       });
// // //     } else {
// // //       res.json({
// // //         status: 'success'
// // //       });
// // //     }
// // //   });
// // // });