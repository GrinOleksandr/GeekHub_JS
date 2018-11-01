'use strict';

/**
 * Упражнение на строки
 *
 * Петя записался в кружок по программированию.
 * На первом занятии Пете задали написать простую программу.
 * Программа должна делать следующее: в заданной строке, которая состоит из прописных и строчных латинских букв, она:
 * удаляет все гласные буквы,
 * перед каждой согласной буквой ставит символ ".",
 * все прописные согласные буквы заменяет на строчные.
 *
 * Гласными буквами считаются буквы "A", "O", "Y", "E", "U", "I", а согласными — все остальные.
 * На вход программе подается ровно одна строка, она должна вернуть результат в виде одной строки,
 * получившейся после обработки.
 *
 * Помогите Пете справиться с этим несложным заданием.
 */

var stringDotTests = [
    {
        parameters: ["tour"],
        expectedResult: ".t.r"
    },
    {
        parameters: ["GeekHub"],
        expectedResult: ".g.k.h.b"
    },
    {
        parameters: ["aBAcAba"],
        expectedResult: ".b.c.b"
    },
    {
        parameters: ["aa"],
        expectedResult: ""
    }
];


function stringDot(word) {
    var vowels = ["A", "O", "Y", "E", "U", "I", "a", "o", "y", "e", "u", "i"]; //setup vowels
    var wordArray = word.split("");                                            //string ->array
    for (let i = 0; i < wordArray.length; i++) {                                   //delete all vowels
        for (let j = 0; j < vowels.length; j++) {
            if (wordArray[i] == vowels[j]) {
                wordArray.splice(i, 1);
                i = 0;
                j = 0;
            }
        }
    }
    for (let i = 0; i < wordArray.length; i++) {                            //if uppercase -> toLowerCase + .
        if (wordArray[i] == wordArray[i].toUpperCase()) {
            wordArray.splice(i, 1, "." + wordArray[i].toLowerCase());
        }
        else {                                                                 // else + .
            wordArray.splice(i, 1, "." + wordArray[i]);
        }
    }
    return wordArray.join("");
}


tasks.push({
    title: "Упражнение на строки",
    solution: stringDot,
    tests: stringDotTests
});
