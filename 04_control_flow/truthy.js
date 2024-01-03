// const userEmail = "dhiraj@dd.ai"

// if (userEmail) {
//     console.log("Got the email");
// } else {
//     console.log("No Email")
// }

const userEmail = []

if (userEmail) {
    console.log("Got the email");
} else {
    console.log("No Email")
}

// Falsey values
// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {
//     name: "dhiraj"
// }

// if (Object.keys(emptyObj).length === 0) {
//      console.log("Object is empty");        
// }


const emptyObj = {
    name: "dhiraj"
}

if (Object.keys(emptyObj).length === 0) {
     console.log("Object is empty");        
}else {
    console.log("Object has properties");
}

// Nullish Coalescing Operator (??) null, undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20


console.log(val1);

// Ternary Operater
// condition ? true : false

let userAge = 30;
let message = userAge >= 18 ? "You are an adult" : "You are not an adult";
console.log(message);

