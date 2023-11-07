// if

// if (true) { 
//     return ("will execute if contion is true")
// }

// if (false) { 
//     return ("will not execute if contion is false")
// }
// ---------------
// const isUserloggedIn = true

// if (isUserloggedIn) {
//     console.log(`The User is Logged In`);
// }

// -------------------

// if (2 === "2") {
//     console.log(`No. is executed`);
// }
// output will be false and no result will be shown

// <, >, <=, >=, ==, !=, ===, !==
// ----------------------

const temperature = 41

// if (temperature < 50) {
//     console.log(`Temp is less than 50`);
// }else{
//     console.log(`Temp is greater then 50`);
// }

// --------------

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // if this console is included in code. the code will get error cause of scope issue it lies in global scope, and error will be "power is not defined"

// ----------------------

const balance = 1000

// if (balance > 500) console.log('test'), console.log('test2'); it works but improper way to write (not recommended)

// if (balance < 500) {
//     console.log(`less than 500`);
// }else if (balance < 750) {
//     console.log(`less than 750`);
// }else{
//     console.log(`less than 1200`);
// }

// -------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log(`Allowed to buy Course`);
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log(`user logged in`);
}