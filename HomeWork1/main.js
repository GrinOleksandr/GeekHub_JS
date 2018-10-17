//Pop
var coolCars = ['Mazda', 'Honda', 'Subaru', 'Bentley', 'запорожец'];
coolCars.pop();
console.log( coolCars );

//Push
coolCars.push( 'Lexus' );
console.log( coolCars );

//Concat
var greatCars = coolCars.concat ('Audi', 'Toyota');
console.log( greatCars );

//IndexOf
console.log( greatCars.indexOf( 'Bentley' )); //3

//Join
var carsList = greatCars.join(`,`);
console.log( carsList );

//ForEach
var coolCars = ['Mazda', 'Honda', 'Subaru', 'Bentley', 'запорожец'];
coolCars.forEach(function( value, i, coolCars ) {
    console.log( "-=" + value + "=-");
});

//Filter
var myArray = [ 111, "Toyota", 222, "Lexus", 123 , 'Mustang' ];
var newArray = myArray.filter(function(value){
    return isNaN(value);
});
console.log( newArray );

//Find
var coolCars = ['Mazda', 'Honda', 'Subaru', 'Bentley', 'запорожец'];
var foo = coolCars.find(function(v){return v == "запорожец"});
console.log( foo );

//Map
var someArray = [ {}, "Apple", 32, "Saturn", [3, 17, 'Ferarri'], 123, undefined, true];
var typesOfData = someArray.map(function (value) {
    return typeof(value);
});
console.log( typesOfData );

//Slice
var coolCars = ['Mazda', 'Honda', 'Subaru', 'Bentley', 'запорожец'];
var someCars = coolCars.slice(1, 3);
console.log( someCars );

//Splice
var coolCars = ['Mazda', 'Honda', 'Subaru', 'Bentley', 'запорожец'];
var oldCars = coolCars.splice(0, 4, 'Лада', "Жигули", "Нива");
console.log( oldCars );
console.log( coolCars );

//Shift
var animals = ["Слон", "Заяц", "Хомяк", "Мышь", "Крыса"];
animals.shift();
console.log( animals );

//Unshift
animals.unshift("Морская свинка");
console.log( animals );


//The End :)