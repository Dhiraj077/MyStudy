function sayMYName() {
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMYName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {

    // let result = num1 + num2
    // return result
    return num1 + num2
}

// addTwoNumbers(6, null)

const result = addTwoNumbers(4, 5)
// console.log(`The sum is ${result}`);


function loginUserMessage(username = "sam") {
    // if(username === undefined){
    //      console.log("Please enter a username");
    //      return      
    // }

    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Dhiraj"));
console.log(loginUserMessage("Dhiraj"));
