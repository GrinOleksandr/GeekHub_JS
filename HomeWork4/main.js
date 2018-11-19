function countMyWater(array) {

    var totalWaterAmmount = 0;
    var lakeStart = 0;
    var lakeEnd = 0;

//find endPoint of the LAKE
    function findLakeEnd(start, array) {
        if (lakeStart == array.length - 1) {
            return 0;
        }

        let end;

        for (let j = array.length - 1; j > start; j--) {
            if (array[j] >= array[start]) {
                end = j;
            }
        }

        if (!end) {
            let temp = [];
            for (let k = start + 1; k < array.length; k++) {
                temp.push(array[k]);
            }
            end = array.indexOf(Math.max(...temp), start + 1);
            return end;
        }

        return end;
    }

//counting water in the LAKE
    array.forEach(function (item, i, arr) {
        lakeEnd = findLakeEnd(lakeStart, arr);
        if (i == lakeEnd) {
            lakeStart = lakeEnd;
        }

        if (lakeStart < i && i < lakeEnd) {
            totalWaterAmmount += Math.min(arr[lakeStart], arr[lakeEnd]) - arr[i];
        }

    })
    return totalWaterAmmount;
}

//testing
var testArray = [2,1,5,0,3,4,7,2,3,1,0];
console.log(`there is ${countMyWater(testArray)} units of water in mountains of  ${testArray}  after the rain.`);

testArray = [0,10,10,0,5,7,2,0];
console.log(`there is ${countMyWater(testArray)} units of water in mountains of  ${testArray}  after the rain.`);

var testArray = [2,1,5,0,3,4,7,2,3,1,0,5];
console.log(`there is ${countMyWater(testArray)} units of water in mountains of  ${testArray}  after the rain.`);
