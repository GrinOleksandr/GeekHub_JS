const TestObject = {
    prop1: "asdad",
    prop2: "dpkkfds",
    prop3: "1112213",
    prop4WithInner: {
        innerPROP1: "innervalue1",
        innerPROP2: "innerValue2",
        innerPROP3: {
            innerINNERPROP1: "123",
            innerINNERPROP2: "1231323"
        }
    },

};

// TestObject.prototype[Symbol.iterator]  = function () {
//     let keys = Object.keys(this);
//     let index = 0;
//     return {
//         next: () => {
//             let currentKey = keys[index];
//             if ((currentKey) && (typeof this[currentKey] === "string")) {
//                 return {
//                     value: currentKey,
//                     done: index++ >= keys.length
//                 }
//             }
//             // else {
//             //     return {
//             //         value:iterateMe(this[currentKey]),
//             //         done: index++ >= keys.length
//             //     }
//             //
//             // }
//         }
//     }
// };



function iterateMe(iterationTarget) {
    iterationTarget[Symbol.iterator] = function(){

        let keys = Object.keys(iterationTarget);
        let index = 0;
        return {
            next: () => {
                let currentKey = keys[index];
                if ((currentKey) && (typeof iterationTarget[currentKey] === "string")) {
                    return {
                        value: currentKey,
                        done: index++ >= keys.length
                    }
                }
                else {
                    return {

                        value: iterationTarget[currentKey],
                        done: index++ >= keys.length
                    };
                }
            }
        }
    }
}

iterateMe(TestObject);

for(let key of TestObject) {
    console.log(key);
}












// let arr3 = ["asd", "dsddsd", ["111",["3123","fsfdsd","123213"],"222"], "ffff"];
// let result = [];
//
// for(let key of arr3) {
//     result.push(key);
// }














*******************
const TestObject = {
    prop1: "asdad",
    prop2: "dpkkfds",
    prop3: "1112213",
    prop4WithInner: {
        innerPROP1: "innervalue1",
        innerPROP2: "innerValue2",
        innerPROP3: {
            innerINNERPROP1: "123",
            innerINNERPROP2: "1231323"
        }
    },
    [Symbol.iterator] : function(){

        let keys = Object.keys(this);
        let index = 0;
        return {
            next: () => {
                let currentKey = keys[index];
                if ((currentKey) && (typeof this[currentKey] === "string")) {
                    return {
                        value: currentKey,
                        done: index++ >= keys.length
                    }
                }
                else  {
                    // let innerIndex = 0;
                    // if
                    return {
                        value: this[currentKey],
                        done: index++ >= keys.length
                    };
                }
            }
        }
    }
};




for(let key of TestObject) {
    console.log(key);
}












// let arr3 = ["asd", "dsddsd", ["111",["3123","fsfdsd","123213"],"222"], "ffff"];
// let result = [];
//
// for(let key of arr3) {
//     result.push(key);
// }














// function generateRandomNumber(){
//     let min = 1;
//     let max = 99;
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// console.log(generateRandomNumber());

// let arr = ["asd", "dsddsd", ["111",["3123","fsfdsd","123213"],"222"], "ffff"];
//
// for(let key of arr) {
//     console.log(key);
// }
**************************
