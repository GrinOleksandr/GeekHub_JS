function countMyWater(array) {
    var totalWaterAmmount = 0;
    var lakeStart = 0;
    var lakeEnd = 0;

    function findLakeEnd(start, array) {
        var peaks = [];
        var temp;
        for (let x = start; x < array.length - 1; x++) {
            if (array[x + 1] > array[x] & array[x + 2] == undefined || array[x + 1] > array[x] & array[x + 1] > array[x + 2] || array[x + 1] >= array[lakeStart]) {
                temp = x + 1;
                peaks.push(array[temp]);
            }
        }
        var peakMatch = peaks.find(function (element, index, myArray) {
            return element >= lakeStart;
        })

        if (peakMatch != undefined) {
            return array.indexOf(peakMatch, start);
        }
        else {
            return array.indexOf(Math.max(...peaks), start);
        }
    }

    array.forEach(function (item, i, arr) {
        lakeEnd = findLakeEnd(lakeStart, arr);
        if (i == lakeEnd) {
            lakeStart = lakeEnd;
        }

        if (lakeStart < i < lakeEnd) {
            totalWaterAmmount += Math.min(arr[lakeStart], arr[lakeEnd]) - arr[i];
        }

    })
    return totalWaterAmmount;
}

var testArray = [2,1,5,0,3,4,7,2,3,1,0];
console.log(`there is ${countMyWater(testArray)} units of water in mountains of  ${testArray}  after the rain.`);

