const express = require('express');

const app = express();

const nodemailer = require('nodemailer');
require('dotenv').config();
const log = console.log;

app.get('/send', (req, res)=>{
    console.log(req.query.email)
    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
            pass: process.env.PASSWORD || '1234' // TODO: your gmail password
        }
    });

    // Step 2
    let mailOptions = {
        from:  process.env.EMAIL, // TODO: email sender
        to: req.query.email, // TODO: email receiver
        subject: 'Nodemailer - Test',
        text: req.query.message
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('error', err)
        }
        return 'message send'
    });
    res.json({
        message: 'ok'
    })
});


app.set('port', process.env.PORT || 3000);

/*start server*/
app.listen(app.get('port'), () => {
 console.log("El servidor está inicializado en el puerto", app.get('port'));
});