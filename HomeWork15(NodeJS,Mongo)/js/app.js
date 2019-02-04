'use strict';
//DB setup
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/foodsDB', {
    useMongoClient:true
})
    .then( () => console.log("*****DB connected successful"))
    .catch(e => console.log(e));

const FoodSchema = new mongoose.Schema({
    name : String,
    calories : Number
});

const Food = mongoose.model('Food', FoodSchema );

// server Setup
const http = require('http'),
    url = require('url'),
    port = 8000,
    ip = '127.0.0.1';

let responseString;
let server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, true);

    response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*"});

    if (parsedUrl.pathname === "/add") {
        let targetName = parsedUrl.query.name;
        let targetCalories = parsedUrl.query.calories;
        Food.create({name: targetName, calories: targetCalories}, function (err) {
            if (err) return console.log(err);
             responseString = ` OK ${JSON.stringify({ name: targetName, calories: targetCalories})}`;
            response.end(responseString);
        });

    }
    if (parsedUrl.pathname === "/get") {
         Food.find({})
             .select('-_id -__v')
             .exec(function(err,Result){

            // console.log(Result[0].toString());
            responseString =  JSON.stringify(Result);
            console.log(responseString);
                 response.end(responseString);

        });
    }
});
server.listen(port, ip);

console.log(`*****Server running at ${ip}:${port}`);

