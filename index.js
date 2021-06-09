const nodemailer = require('nodemailer');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
//server port
const port = 8080
//server address
const hostname = '127.0.0.1';
//email data
const sender = "sender@email.com";
const senderPass = "pass";
const reciver = "reciver@email.com";
//parses request body to get title and text
app.use(bodyParser.urlencoded({ extended: true }));
//loads all statics (js,css etc)
app.use(express.static(__dirname));
//sendmail post route
app.post('/sendmail', function (req, res) {
    console.log("Sending mail with title: '" + req.body.title+ "' and text: '" +req.body.text+"'")
    sendMail(req.body.title,req.body.text);
    res.sendStatus(200);
})
//standart GET routes
app.get('/', function(req, res) {
    res.sendFile(__dirname +'/index.html');;
});
//start server
app.listen(port, () => {
  console.log(`Twój zajebisty backend listening on http://${hostname}:${port}`)
})

function sendMail(title, text) {
    //mail transporter obj
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: sender,
            pass: senderPass
        }
    });
    //mail data
    let mailOptions = {
        from: sender,
        to: reciver,
        subject: title,
        text: text
    };
    //sending mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
    });
}