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

        let objectLength = Object.values(this);
        let index = 0;
        let innerIndex = 0;
        return {
            next: () => {
                let currentKey = objectLength[index];
                if ((currentKey) && (typeof this[currentKey] === "string")) {
                    return {
                        value: currentKey,
                        done: index > objectLength.length
                    }
                }
                else  {
                    innerIndex = 0;
                    return {
                        value: this[currentKey],
                        done: index++ >= objectLength.length
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