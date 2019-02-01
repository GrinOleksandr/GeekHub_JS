const Food = require('./model');
const express = require('express');
const router = express.Router();
app = express();

// router.get('/', (request,response,next) => {
//     console.log(`reuqest is :  ${request}`);
//     Food.find({})
//         .then(foods => {
//             console.log(`response is :  ${response.json({foods})}`);
//             response.json({foods})
//         })
//         .catch(next);
//
// });
//
// router.post('/', (request, response, next) => {
//     console.log(`reuqest is :  ${request}`);
//     console.log(`reuqest2222 is :  ${request.body.food}`);
//     new Food(request.body.food)
//         .save()
//         .then(food => {
//             console.log(`food is ${food}`);
//             response.json({food});
//      })
//         .catch(next);
// });

app.get('/', function(req, res) {
    res.send('hello world');
});


module.exports = router;