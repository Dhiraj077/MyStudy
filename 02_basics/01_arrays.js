// arrays

const myArr = [6, 1, 2, 3, 4, 5];
const myHeros = ["Itachi", "Naruto", "Jiraya"];

const myArr2 = new Array(2, 3, 5, 6, 3, 1);

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // pop removes last value

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr);

const nyn1 = myArr.slice(1, 3)
console.log(nyn1);

console.log("B ", myArr);

const nyn2 = myArr.splice(1, 3)
console.log(nyn2);

console.log("C ", myArr);