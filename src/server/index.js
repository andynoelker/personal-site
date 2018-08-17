import http from 'http';
import express from 'express';
import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import bodyParser from 'body-parser';
import path from 'path';
import App from './App';
import env from '../../.env.json';

process.env.EMAIL_RECIPIENT = env.EMAIL_RECIPIENT;
process.env.DOMAIN_NAME = env.DOMAIN_NAME;

const app = express();
const DEV = process.env.NODE_ENV === 'development';
const staticDir = DEV ? 'build' : 'static';
const port = '1337';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());

var auth = {
  auth: {
    api_key: env.MAILGUN_API,
    domain: env.MAILGUN_DOMAIN
  },
}

app.post('/contact', function (req, res) {
  var nodemailerMailgun = nodemailer.createTransport(mg(auth));
  let mailOpts, smtpTrans;
  mailOpts = {
    from: req.body.email,
    to: process.env.EMAIL_RECIPIENT,
    subject: 'New message from ' + process.env.DOMAIN_NAME,
    text: 'Sender Name: ' + req.body.name + '\n\n' + req.body.message
  };
  nodemailerMailgun.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.status(400).send({
        'error': true,
        'alert': 'Something went wrong when sending the message. Please refresh the page and try again.',
      });
    }
    else {
      res.status(200).send({
        'error': false,
        'alert': 'Thank you for reaching out. I\'ll get back to you shortly.',
      });
    }
  });
});

app.use('/static/img', express.static(path.join(process.cwd(), 'assets/img')));
app.use('/static', express.static(path.join(process.cwd(), staticDir)));
app.use(App);
app.listen(port);

console.log('Server running at http://192.168.1.8:' + port);
