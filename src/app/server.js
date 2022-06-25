
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');


// Static folder
app.use(express.static('public'));
app.use(express.json());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  //res.send('hello world');
  res.sendFile(__dirname + '/contact/contact.component.html')
 
})
//CORS
app.get('/contact', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:5000');
  //res.json({ 'candy': 'bubble-gum' })
  app.use(cors());

})

app.post('/contact', (req, res) => {
 
 console.log(req.body);
  /*
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul>
  <li>FirstName: $ {req.body.name}</li>
  <li>Email: $ {req.body.email}</li>
  <li>Subject: $ {req.body.subject}</li>
  <li>Message: $ {req.body.message}</li>
  </ul>`
   */
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service:'gmail',
   // host: '',
    //port: 587,
   // secure: false, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: ''  // generated ethereal password
    }
    ///tls: {
   //   rejectUnauthorized: false
   // }
  })


  const mailOptions = {
    //html: string,

    from: req.body.email, // sender address
    to: '', // list of receivers
    subject: 'Subject', // Subject line
    //text: req.body.message // plain text body
    html: "<p>You have a new contact request</p><h3>Contact Details</h3><ul><li>Name: "+req.body.name+"</li><li>Company: "+req.body.email+"</li><li>Email:"+req.body.subject+"</li><li>Phone: "+req.body.message+"</li></ul>",
    // html:output
  }

  transporter.sendMail(mailOptions, (error, res)=>{
    if (error) {
      console.log(error);
      res.send('error');
    }
    else {
      console.log('Email sent: ' + res.response);
      res.send('success');
    }
   
  })


})
app.listen(PORT, () => console.log('Server running on ${PORT}...'))
