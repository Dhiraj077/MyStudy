let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Dhiraj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" = false
// "Dhiraj" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*************************** Operations **********************************//

let value = 4
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("1" + ( 2 + 2));

console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
// console.log(gameCounter)

// Note : learn about prefix and postfix
// define prefix
let preGameCounter = ++gameCounter // first increment then assign to variable
// console.log(preGameCounter, gameCounter)

// define Postfix
let posGameCounter = gameCounter-- // assign to variable then decrement
// console.log(posGameCounter, gameCounter)


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



