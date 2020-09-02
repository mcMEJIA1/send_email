const { Router } = require('express');
const router = Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

/**GET */
router.get('/', async(req,res)=>{
    var para = req.params.to;
    var de = req.params.from;
    var texto = req.params.text;
    const msg = {
        to: para,
        from: de,
        subject: 'Sending with Twilio SendGrid is Fun',
        text: texto,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
    sgMail.send(msg);
    res.json({
        message: "email sended"
    })
});


