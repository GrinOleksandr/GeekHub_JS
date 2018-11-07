function countMyWater(array) {
    var totalWaterAmmount = 0;
    var lakeStart = 0;
    var lakeEnd = 0;
    var tempCount = 0;
    array.forEach(function (item, i, arr) {
        if (arr[lakeStart] <= arr[i + 1]) {
            lakeEnd = i + 1;
            for (let k = lakeStart; k < lakeEnd; k++) {
                tempCount += arr[lakeStart] - arr[k];
            }
            totalWaterAmmount += tempCount;
            lakeStart = i + 1;
        }
        //  console.log(item,i,arr)
    })
    return totalWaterAmmount;
}
var testArray = [2,1,5,0,3,4,7,2,3,1,0];
console.log(`there is ${countMyWater(testArray)} units of water in mountains of  ${testArray}  after the rain.`);














