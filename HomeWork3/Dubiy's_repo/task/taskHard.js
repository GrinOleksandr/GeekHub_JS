
var drazilTest = [
    {
        parameters: ["1234"],
        expectedResult: 33222
    },
    {
        parameters: ["555"],
        expectedResult: 555
    }
];
/**
 * In the first case, F(1234) = 1! * 2! * 3! * 4! = F(33222)
 */




function drazil(boys, girls) {
//!!!!! IMPORTANT!!!!!!! To be honest i didn't find so genious logical solution  myself, i find it in google (https://codeforces.com/blog/entry/16468),
//but all the code i composed myself from the beginning to the end. Thanks.
    function factorial(n) {             //Finds factorial of a number
        if (n < 0) {
            return "will return NaN ;)" / 10;
        }
        else if (n != 0) {
            return n * factorial(n - 1);
        }

        else {
            return 1;
        }
    }

    function superNumber(number) {                                              //Finds X=a1!*a2!*....*an! lets call it SUPERNUMBER
        var myNumberFactorials = [];
        for (let i = 0; i < number.length; i++) {
            myNumberFactorials.push(factorial(number.toString().charAt(i)));
        }
        var myNumber = 1;
        for (let i = 0; i < myNumberFactorials.length; i++) {

            myNumber = myNumber * myNumberFactorials[i];
        }
        return myNumber;
    }

    var tempArray = [];                                                                                 //temporar array - container
    var superNumbersArray = [];                                                                         // my results array
    for (let j = 0; j < boys.length; j++) {                                                            // pick every digit of input-number
        var x = superNumber(boys.toString().charAt(j));                                                 // find maximal super number for it
        for (let i = 0; i < 9999; i++) {
            var y = superNumber(i.toString());
            if (y == x) {
                if (i.toString().indexOf("0") == -1 && i.toString().indexOf("1") == -1) {               // not containing 0 or 1
                    tempArray.pop();
                    tempArray.push(i);
                }
            }
        }
        for (let k = 0; k < tempArray.length; k++) {
            superNumbersArray.push(tempArray[k]);                                                       //collect them all in my results array
        }
    }
    var result = [];
    for (let i = 0; i < superNumbersArray.length; i++) {                          //split all our numbers into separate digits
        for (let j = 0; j < superNumbersArray[i].toString().length; ++j) {
            result.push(superNumbersArray[i].toString().charAt(j));                 // and push all digits to one array
        }
    }

    function compare(a, b) {                                            //sort it in ascending order
        if (a > b) return -1;
        if (a < b) return 1;
    }

    result = result.sort(compare);                                  //compare all numbers
    result = +result.join("");                                       //make it into single number
    return result;
}


tasks.push({
    title: "Drazil and Factorial",
    solution: drazil,
    tests: drazilTest
});
