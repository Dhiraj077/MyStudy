// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Characters are ${greet}`);
}

// Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('Jap', 'Japan')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":- ", value);
}

// for in with map
const myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
console.log("For in loop");
for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}:- ${myObject[key]}`);
    }
}

// For each