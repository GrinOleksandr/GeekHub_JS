'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];



function capsLock(str) {
    var result = "";

    function isCapital(letter) {                 //is letter CAPITAL?
        return letter == letter.toUpperCase();
    }

    function capsOn(string) {
        if (!isCapital(string[0])) {                 //first letter not capital - the rest capital
            let counter = 0;
            for (let i = 1; i < string.length; i++) {
                if (isCapital(string[i])) {
                    counter++;
                }
            }
            return counter == string.length - 1;
        }
        else {                 //first letter not capital - the rest capital
            let counter = 0;
            for (let i = 0; i < string.length; i++) {
                if (isCapital(string[i])) {
                    counter++;
                }
            }
            return counter == string.length;
        }
    }

    function revert(string) {                       //revert all letters of string
        var _result = [];
        for (let i = 0; i < string.length; i++) {
            if (isCapital(string[i])) {
                _result.push(string[i].toLowerCase());
            }
            else {
                _result.push(string[i].toUpperCase());
            }
        }
        _result = _result.join("");
        return _result;
    }

    if (~str.indexOf(" ")) {                    //if there is few words
        var wordsArray = str.split(" ");
        var resultWords = [];
        for (let i = 0; i < wordsArray.length; i++) {
            resultWords.push(capsLock(wordsArray[i]))
        }
        result = resultWords.join(" ");

    }

    else if (capsOn(str)) {
        result = revert(str);
    }
    else {
        result = str;
    }
    return result;

}


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
