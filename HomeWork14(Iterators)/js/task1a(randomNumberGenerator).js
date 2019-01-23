//CREATING TEST OBJECT
let testObject = {
    [Symbol.iterator]: () => {
        const limit = 99;
        let numberCounter = 0;

        return {
            next: () => {
                if (numberCounter < limit) {
                    numberCounter++;
                    return {
                        value: generateRandomNumber(),
                        done: false
                    }
                }
                return {done: true}
            }
        }
    }
};

//GENERATING RANDOM NUMBER
function generateRandomNumber(){
    let min = 1;
    let max = 999;
    return Math.floor(Math.random() * (max - min) + min);
}

// TESTING
let arr = [];
for (let number of testObject){
    arr.push(number);
}

console.log("");
console.log("**** TESTING:generating 99 random numbers and arranging them into array for usability:");
console.log(arr);

