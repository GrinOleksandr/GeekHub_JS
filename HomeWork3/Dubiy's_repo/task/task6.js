'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    var allYears = [];                              //creating array of all years existing
    var allPrettyYears = [];

    function isPretty(year) {
        var myYear = year.toString();
        var counter = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i != j && myYear[i] == myYear[j]) {
                    counter++;
                }
            }
        }
        return counter == 0;
    }

    for (let i = 1000; i <= 9000; i++) {
        allYears.push(i);
    }
    var position = allYears.findIndex(function (element, index, array) {
        return element == y
    })
    for (let i = position + 1; i < allYears.length; i++) {
        if (isPretty(allYears[i])) {
            return allYears[i];
        }
    }
}

tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
