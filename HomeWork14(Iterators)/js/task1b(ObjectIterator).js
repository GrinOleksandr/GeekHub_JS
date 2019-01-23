const TestObject = {
    prop1: "Value1(Level = ROOT)",
    prop2: "Value2(Level = ROOT)",
    prop3: "Value3(Level = ROOT)",
    prop4WithInnerLevel: {
        innerPROP1: "Value1(Level = 1)",
        innerPROP2: "Value2(Level = 1)",
        innerPROP3: {
            innerINNERPROP1: "Value1(Level = 2)",
            innerINNERPROP2: "Value2(Level = 2)"
        },
        innerPROP4: "Value3(Level = 1)"
    },
    prop5: "Value4(Level = ROOT)",
    prop6: ["arrPROP1", "arrPROP2", "arrPROP3"],
    [Symbol.iterator]: function () {

        let rootKeys = Object.keys(this);
        let index = 0;
        let resultsArray = [];
        for (let i = 0; i < rootKeys.length; i++) {
            let currentItem = this[rootKeys[i]];
            if (typeof currentItem === "string") {
                resultsArray.push(currentItem);
            }
            if (typeof currentItem === "object") {
                resultsArray = resultsArray.concat(iterateMe(currentItem));
            }
        }
        return {
            next: () => {
                //если конец обьекта
                if (index === resultsArray.length) {
                    return {
                        done: true
                    }
                }
                return {
                    value: resultsArray[index++],
                    done: false
                }
            }
        }
    }
};

function iterateMe(target) {
    let targetKeys = Object.keys(target);
    let results = [];
    for (let i = 0; i < targetKeys.length; i++) {
        let currentValue = target[targetKeys[i]];
        if ((currentValue) && (typeof currentValue) === "string") {
            results.push(currentValue);
        }
        if ((currentValue) && (typeof currentValue) === "object") {
            results = results.concat(iterateMe(currentValue));
        }
    }
    return results
};


// TESTING ITERATION!
console.log("");
console.log("**** TESTING: multiLevel object iteration. Results: ");
for(let key of TestObject) {
    console.log(key);
};
