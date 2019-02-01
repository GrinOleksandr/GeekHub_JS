'use strict';

//DB setup
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testbase', {
    useMongoClient:true
})
    .then( () => console.log("*****DB connected successful"))
    .catch(e => console.log(e));

const FoodSchema = new mongoose.Schema({
    id : Number,
    name : String,
    calories : Number

});

module.exports = mongoose.model('Food', FoodSchema );

