const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const nodemailer = require("nodemailer");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

var transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "samurod@gmail.com",
    pass: "D1scg0lf1980",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/contact", (req, res, next) => {
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var emailAddress = req.body.emailAddress;
  var subject = req.body.subject;
  var content = `name: ${
    (firstName, lastName)
  } \n email: ${emailAddress} \n subject: ${subject} `;

  var mail = {
    from: "samurod@gmail.com",
    to: "samurod@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        msg: "fail",
      });
    } else {
      console.group(data);
      res.json({
        msg: "success",
      });
    }
  });
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  // //send the contact info the user submitted to your email
  // req.body.firstName
  res.end();
});


module.exports = app;
