const express = require('express');
const bodyParser = require ('body-parser')
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/contact', (res, req) => {
    const subject = req.body;
    //send the contact info the user submitted to your email
});
app.listen(port, () => {
    console.log('App listeningn port ${port}')

})