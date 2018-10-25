//Завдання:
//   Створити об'єкт який схожий на масив. Реалізувати методи push, pop, join, filter, find, map, sort, toString, геттер length
//Завдання з зірочкою ⭐
//Реалізувати конструктор схожий на new Array(........)
//В цей контруктор можна буде передавати будь-яку кількість елементів, які стануть елементами нашого "масиву"

"use strict";

var flowers =  {0: "Rose", 1: "Tulip", 2: "Cornflower", 3: "Gladiolus", 4: "Lily", 5: "Gerbera", 6: "Hydrangea"}; // <--this is my test object
var numbers = {0: "10", 1: "127", 2: "41", 3: "12", 4: "99", 5: "333", 6: "190"}// <--this is my other test object

//creating global object
var objectWithArrayMethods = {};

//setting a prototypes
Object.setPrototypeOf(flowers, objectWithArrayMethods);
Object.setPrototypeOf(numbers, objectWithArrayMethods);

//creating .length
Object.defineProperty(objectWithArrayMethods , "length", {
        get: function () {
            let counter = 0;
            for (let key in this) {
                if (this.hasOwnProperty(key)) {
                    counter++;
                }
            }
            return counter;
        }
    }
)

//creating .toString
//(иначе не получалось сделать вызов obj.toString без скобок, получалось лишь obj.toString() , а это не тру!)
Object.defineProperty(objectWithArrayMethods , "toString", {
        get: function toString() {
            let result = "";
            for (let key in this) {
                if (this.hasOwnProperty(key)) {
                    if (key == this.length - 1) {
                        result = result + key + ": " + this[key];
                    }
                    else {
                        result = result + key + ": " + this[key] + ", ";
                    }
                }
            }
            return result;
        }
    }
)


// assigning methods
objectWithArrayMethods.push = push;
objectWithArrayMethods.pop = pop;
objectWithArrayMethods.join = join;
objectWithArrayMethods.filter = filter;
objectWithArrayMethods.find = find;
objectWithArrayMethods.map = map;
objectWithArrayMethods.sort = sort;


//push
function push(pushValue) {
    return this[this.length] = pushValue;
}

//pop
function pop(){
     delete this[this.length - 1];
};

//join
function join(separator) {
    let result = "";
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (key == this.length - 1) {
                result = result + this[key];
            }
            else {
                result = result + this[key] + separator;
            }
        }
    }
    return result;
}

//filter
function filter(test) {
    let result = {};
    let counter = 0;

    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (test(this[key])) {
                result[counter] = this[key];
                counter++;
            }
        }
    }
    return result;
}
//numbers.filter(function(val){return val>50})

//find
function find(test) {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (test(this[key])) {
                return this[key];
            }
        }
    }
}
//flowers.find(function(val){return val>1})


//map
function map(transform) {
    let result = {};
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            result[key] = transform(this[key]);
        }
    }
    return result;
}

//sort
function sort(compare) {
    for (let key in this) {
        let a = key;
        let b = +key + 1;
        if (this.hasOwnProperty(a)) {
            for (a = 0; a < this.length - 1; a++) {
                for (b = 0; b < this.length - 1; b++) {
                    if (compare(this[a], this[b]) == false) {
                        let container = this[a];
                        this[a] = this[b];
                        this[b] = container;
                    }
                }
            }
        }
    }
}


// task with * = Constructor.
function Construct() {
    let result = {};
    for (var i = 0; i < arguments.length; i++) {
        result[i] = arguments[i];
    }
    return result;
}




//push demo
console.log ("К обьекту ", flowers );
console.log("я добавил ", flowers.push("одуванчик"));
console.log ("и вот что получилось " , flowers);
console.log("----------------------------------------------------------")

//pop demo
flowers.pop();
console.log("а теперь, забераем одуванчик обратно, получается ", flowers );
console.log("----------------------------------------------------------")

//join demo
var joinDemo = flowers.join("/");
console.log("Вот что сделал из " , flowers)
console.log("метод join: ", joinDemo);
console.log("----------------------------------------------------------")

//filter demo
console.log( "к обьекту " , numbers);
console.log("применяем метод filter(>50), получается: ", numbers.filter(function(val){return val>50}));
console.log("----------------------------------------------------------")

//find demo
console.log("К " , numbers);
var findDemo = numbers.find(function(val){return val>40});
console.log("применяем метод find(>40) ", findDemo);
console.log("----------------------------------------------------------")

//map demo
console.log("а вот что сделал с ", flowers);
var mapDemo = flowers.map(function(val){return val+" is flower"});
console.log("метод 'map' :", mapDemo );
console.log("----------------------------------------------------------")

//sort Demo
console.log("сортируем свойства обьекта", numbers);
numbers.sort(function(a,b){return a>b});
console.log(numbers);
console.log("----------------------------------------------------------")

//Object constructor Demo
var objectDemo =new Construct(1,"hello",3,4,5,"world",7997,8,7,"-=O_o=-",6,6,34,4,4);
console.log("Конструктор делает из:  1,'hello',3,4,5,'world',7997,8,7,'-=O_o=-',6,6,34,4,4 ");
console.log("вот такое:  ", objectDemo);

