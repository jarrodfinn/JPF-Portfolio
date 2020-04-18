const express = require('express');
const bodyParser = require ('body-parser')
const app = express();
const port = process.env.PORT || 8080;
const nodemailer = require('nodemailer');
const creds = require("../config/config");

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});


// Body Parser Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
    console.log(req.body);
    // //send the contact info the user submitted to your email
    // req.body.firstName
    res.end();
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)

})

app.post("/send", (req, res, next) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    
  var emailAddress = req.body.emailAddress;
  var subject = req.body.subject;
  var content = `name: ${firstName, lastName} \n email: ${emailAddress} \n subject: ${content} `;

  var mail = {
    from: firstName,
    to: "RECEIVING_EMAIL_ADDRESS_GOES_HERE", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

module.exports = app;