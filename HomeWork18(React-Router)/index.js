const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5005;
const formidableMiddleware = require('express-formidable');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// CONTACT FORM HANDLER!!

app.use(formidableMiddleware());
app.post('/sendmail', function (req, res){
        console.log(req.fields); // contains non-file fields
        console.log(req.files); // contains files

    let name = req.fields.name;
    let email = req.fields.email;
    let message = req.fields.message;

    let API_KEY = '06789e3ec54ff822027f358bb2ef04b0-7caa9475-11be9a4a';
    let DOMAIN = 'sandbox02c1799ed97f49c48a63f46647ad1e8e.mailgun.org';
    let mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

    const data = {
        from: 'Grin Oleksandr <grin.scv@gmail.com>',
        to: `${email}, grin.scv@gmail.com`,
        subject: `Grin Oleksandr's website`,
        text: `Hello ${name}, you have submitted a message on my website.
        The message was:
        ----------------------------------------------------------------
        ${message}
        ----------------------------------------------------------------
        I'll read it ASAP.       
        Good Bye!`
    };

    mailgun.messages().send(data, (error, body) => {
        console.log(body);
    });
    res.end()
});
// END OF HANDLER

http.listen(port, function () {
    console.log(`***Server running at localhost:${port}`);
});