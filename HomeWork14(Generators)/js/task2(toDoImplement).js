console.log("");
console.log("**** TESTING:toDoImplement. Results:");

//by Denys Pysmennyi

function perform() {
    //TODO implement
    return new Promise(function(resolve) {
            return resolve(0)
        }
    )
}

perform(null, function(value) { // value === null
    var param = 1;
    console.log(param); // 1
    return param;
})
    // Start section added for tests
    .then(function(param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    // END section added for test

    .then(function(param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param;
    });
