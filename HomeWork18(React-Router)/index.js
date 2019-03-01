const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5005;
const  bodyParser = require('body-parser');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
// app.get('/api/data', (req, res) => {
//     res.json({users: [
//             {username: 'John', id: 251},
//             {username: 'Jane', id: 904}
//         ]});
//     console.log(`request /api/data`);
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


// CONTACT FORM HANDLER!!
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.post('/sendmail', function (req, res){
    console.log(req.body.name);
    console.log(req.body);
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    let API_KEY = 'e6bde2a59b57985d3d1f317bec1d2418-7caa9475-b08b60e2';
    let DOMAIN = 'sandboxde8e621002404afa901c79d9eb9cf7a1.mailgun.org';
    let mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

    const data = {
        from: 'Grin Oleksandr <grin.scv@gmail.com>',
        to: `${email}, grin.scv@gmail.com`,
        subject: `Notification from Grin Oleksandr's website`,
        text: `Hello ${name}, you submitted a message on my site grinoleksandr.herokuapp.com .
        The message is successfully recieved by me. The message was:
        ----------------------------------------------------------------
        ${message}
        ----------------------------------------------------------------
        Good Bye!`
    };

    mailgun.messages().send(data, (error, body) => {
        console.log(body);
    });



    res.end()
});
// END OF HANDLER

http.listen(port, function () {
    console.log(`Server running at localhost:${port}`);
});
